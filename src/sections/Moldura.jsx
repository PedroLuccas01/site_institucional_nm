import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Download, Share2, Upload } from "lucide-react";
import { MOLDURAS } from "../data/molduras";

export default function Moldura() {
  const canvasRef = useRef(null);
  const fotoRef = useRef(null);
  const molduraRef = useRef(null);
  const dragRef = useRef(null);
  const [formato, setFormato] = useState("feed");
  const [molduraId, setMolduraId] = useState(MOLDURAS[0].id);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [temFoto, setTemFoto] = useState(false);
  const [molduraPronta, setMolduraPronta] = useState(false);

  const atual = useMemo(
    () => MOLDURAS.find((m) => m.id === molduraId) ?? MOLDURAS[0],
    [molduraId],
  );
  const lista = useMemo(() => MOLDURAS.filter((m) => m.formato === formato), [formato]);

  useEffect(() => {
    setMolduraPronta(false);
    const img = new Image();
    img.onload = () => {
      molduraRef.current = img;
      setMolduraPronta(true);
    };
    img.src = atual.url;
    return () => {
      img.onload = null;
    };
  }, [atual.url]);

  const desenhar = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w, h } = atual;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, w, h);
    const foto = fotoRef.current;
    if (foto) {
      const scale = Math.max(w / foto.width, h / foto.height);
      const dw = foto.width * scale * zoom;
      const dh = foto.height * scale * zoom;
      ctx.drawImage(foto, w / 2 - dw / 2 + offset.x, h / 2 - dh / 2 + offset.y, dw, dh);
    } else {
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#002CA2");
      g.addColorStop(1, "#1E42C4");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "700 48px Raleway, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("SUA FOTO AQUI", w / 2, h * 0.35);
    }
    const overlay = molduraRef.current;
    if (overlay) ctx.drawImage(overlay, 0, 0, w, h);
  }, [atual, offset, zoom]);

  useEffect(() => {
    desenhar();
  }, [desenhar, molduraPronta]);

  function trocarFormato(id) {
    setFormato(id);
    const primeira = MOLDURAS.find((m) => m.formato === id);
    if (primeira) setMolduraId(primeira.id);
    setOffset({ x: 0, y: 0 });
    setZoom(1);
  }

  function escolherFoto(file) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      fotoRef.current = img;
      setTemFoto(true);
      setOffset({ x: 0, y: 0 });
      setZoom(1);
      desenhar();
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  function baixar() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = `eraldo-20222-${atual.id}.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();
  }

  async function compartilhar() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      const file = blob
        ? new File([blob], `eraldo-20222-${atual.id}.png`, { type: "image/png" })
        : null;
      if (file && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          text: "Eu sou Filho do Amazonas. Vote Eraldo CB 20222.",
        });
        return;
      }
    } catch {
      /* fallback */
    }
    baixar();
    window.alert("Sua moldura foi baixada. Agora poste no Instagram, Facebook ou WhatsApp.");
  }

  return (
    <section id="moldura" className="sec-pad bg-white">
      <div className="container-c grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700">
            Ferramenta 20222
          </p>
          <h2 className="mt-3 grid gap-[2px]">
            <span className="t-outline">Faça sua</span>
            <span className="t-solid">Moldura</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
            Escolha o formato, selecione uma das molduras oficiais, suba sua foto e ajuste o
            enquadramento. Tudo acontece no seu próprio celular, sua foto não é enviada para nenhum
            servidor.
          </p>
          <div className="mt-7">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-ink-soft">
              1. Formato
            </p>
            <div
              role="tablist"
              aria-label="Formato da moldura"
              className="mt-2 inline-flex rounded-full bg-bg-light p-1"
            >
              {[
                { id: "feed", rotulo: "Feed 1:1", qtd: 3 },
                { id: "stories", rotulo: "Stories 9:16", qtd: 2 },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={formato === tab.id}
                  onClick={() => trocarFormato(tab.id)}
                  className={`rounded-full px-5 py-2 text-[13px] font-extrabold uppercase tracking-wide transition ${
                    formato === tab.id ? "bg-blue-700 text-white" : "text-ink-soft"
                  }`}
                >
                  {tab.rotulo}
                  <span className="ml-2 text-[11px] opacity-70">{tab.qtd}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-ink-soft">
              2. Escolha a moldura
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {lista.map((m) => {
                const ativa = m.id === atual.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    aria-pressed={ativa}
                    onClick={() => setMolduraId(m.id)}
                    title={m.nome}
                    className={`relative overflow-hidden rounded-xl border-2 bg-white transition ${
                      ativa ? "border-lime-brand shadow-lg" : "border-black/10 hover:border-blue-600"
                    }`}
                  >
                    <img
                      src={m.url}
                      alt={`Moldura ${m.nome}`}
                      loading="lazy"
                      className={`block object-cover ${m.formato === "feed" ? "size-24" : "h-32 w-[72px]"}`}
                    />
                    {ativa && (
                      <span className="absolute right-1 top-1 grid size-5 place-items-center rounded-full bg-lime-brand text-blue-900">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                    )}
                    <span className="block bg-blue-900 px-2 py-1 text-[10px] font-bold uppercase text-white">
                      {m.nome}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            <p className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-ink-soft">
              3. Sua foto
            </p>
            <label className="btn-c w-fit cursor-pointer bg-blue-700 text-white">
              <Upload className="size-4" aria-hidden="true" />
              {temFoto ? "Trocar foto" : "Escolher foto"}
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => escolherFoto(e.target.files?.[0])}
              />
            </label>
            <div>
              <label
                htmlFor="zoom"
                className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-ink-soft"
              >
                Zoom
              </label>
              <input
                id="zoom"
                type="range"
                min={1}
                max={3}
                step={0.01}
                value={zoom}
                disabled={!temFoto}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="accent-lime-brand mt-2 w-full max-w-sm"
              />
              <p className="mt-2 text-xs text-ink-soft">
                Arraste a foto para reposicionar dentro da moldura.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={baixar}
                disabled={!temFoto}
                className="btn-c bg-lime-brand text-blue-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Download className="size-4" aria-hidden="true" />
                Baixar moldura
              </button>
              <button
                type="button"
                onClick={compartilhar}
                disabled={!temFoto}
                className="btn-c bg-zap text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Share2 className="size-4" aria-hidden="true" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
        <div className={`mx-auto w-full ${formato === "feed" ? "max-w-md" : "max-w-[320px]"}`}>
          <canvas
            ref={canvasRef}
            width={atual.w}
            height={atual.h}
            aria-label={`Pré-visualização da moldura ${atual.nome}`}
            className="w-full cursor-grab touch-none rounded-2xl shadow-xl active:cursor-grabbing"
            onPointerDown={(e) => {
              if (!temFoto) return;
              dragRef.current = { x: e.clientX, y: e.clientY };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const start = dragRef.current;
              if (!start) return;
              const ratio = atual.w / e.currentTarget.clientWidth;
              setOffset((prev) => ({
                x: prev.x + (e.clientX - start.x) * ratio,
                y: prev.y + (e.clientY - start.y) * ratio,
              }));
              dragRef.current = { x: e.clientX, y: e.clientY };
            }}
            onPointerUp={() => {
              dragRef.current = null;
            }}
          />
        </div>
      </div>
    </section>
  );
}
