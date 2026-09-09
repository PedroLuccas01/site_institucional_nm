"""Gera as molduras PNG transparentes da campanha Nathan Macena 1522."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageEnhance

OUT = Path(r"C:\PROJETOS\CURSOR\NATAN\SITE\public\assets\frames")
FONTS = Path(r"C:\Windows\Fonts")

NAVY = (0, 51, 161, 255)  # #0033a1
CYAN = (85, 207, 255, 255)  # #55CFFF
GREEN = (59, 168, 62, 255)  # #3BA83E
YELLOW = (255, 208, 0, 255)  # #FFD000
WHITE = (255, 255, 255, 255)
CLEAR = (0, 0, 0, 0)


def fnt(name, size):
    return ImageFont.truetype(str(FONTS / name), size)


def add_grain(img, box, amount=18):
    x0, y0, x1, y1 = box
    w, h = x1 - x0, y1 - y0
    noise = Image.effect_noise((w, h), amount).convert("L")
    noise = ImageEnhance.Contrast(noise).enhance(1.4)
    overlay = Image.new("RGBA", (w, h))
    overlay.putdata([(0, 0, 0, max(0, 128 - p) // 14) for p in noise.getdata()])
    img.paste(Image.alpha_composite(img.crop(box), overlay), (x0, y0))


def add_grid(draw, box, step=56, color=(255, 255, 255, 22)):
    x0, y0, x1, y1 = box
    for x in range(x0, x1, step):
        draw.line((x, y0, x, y1), fill=color, width=1)
    for y in range(y0, y1, step):
        draw.line((x0, y, x1, y), fill=color, width=1)


def speech_bubble(draw, x, y, w, h, fill):
    r = h // 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=r, fill=fill)
    cy = y + h // 2
    draw.polygon([(x - 26, cy), (x + 8, cy - 20), (x + 8, cy + 20)], fill=fill)


def name_lockup(draw, x, y, scale=1.0):
    nathan = fnt("ariblk.ttf", int(72 * scale))
    cargo = fnt("arialbd.ttf", int(22 * scale))
    macena = fnt("ariblk.ttf", int(34 * scale))
    draw.text((x, y), "Nathan", font=nathan, fill=CYAN)
    nathan_box = draw.textbbox((x, y), "Nathan", font=nathan)
    cargo_y = nathan_box[3] + int(4 * scale)
    draw.text((x, cargo_y), "Deputado Federal", font=cargo, fill=YELLOW)
    cargo_box = draw.textbbox((x, cargo_y), "Deputado Federal", font=cargo)
    macena_x = cargo_box[2] + int(14 * scale)
    macena_y = cargo_y - int(4 * scale)
    draw.text((macena_x, macena_y), "macena", font=macena, fill=GREEN)
    macena_box = draw.textbbox((macena_x, macena_y), "macena", font=macena)
    stripe_y = max(cargo_box[3], macena_box[3]) + int(8 * scale)
    stripe_right = macena_box[2]
    mid = x + (stripe_right - x) // 2
    thick = max(6, int(7 * scale))
    draw.rectangle((x, stripe_y, mid, stripe_y + thick), fill=GREEN)
    draw.rectangle((mid, stripe_y, stripe_right, stripe_y + thick), fill=YELLOW)
    return stripe_y + thick


def number_bubble(draw, x, y, scale=1.0):
    w, h = int(248 * scale), int(92 * scale)
    speech_bubble(draw, x, y, w, h, GREEN)
    num = fnt("ariblk.ttf", int(56 * scale))
    draw.text((x + w // 2, y + h // 2 - int(4 * scale)), "1522", font=num, fill=YELLOW, anchor="mm")
    return w, h


def slogan(draw, cx, y, scale=1.0):
    top = fnt("arialbi.ttf", int(34 * scale))
    midf = fnt("arialbi.ttf", int(38 * scale))
    bot = fnt("arialbi.ttf", int(40 * scale))
    draw.text((cx, y), "O AMAZONAS", font=top, fill=WHITE, anchor="ma")
    mid = "EM PRIMEIRO"
    bbox = draw.textbbox((0, 0), mid, font=midf)
    bw = bbox[2] - bbox[0] + int(36 * scale)
    bh = bbox[3] - bbox[1] + int(18 * scale)
    box_y = y + int(42 * scale)
    draw.rounded_rectangle((cx - bw // 2, box_y, cx + bw // 2, box_y + bh), radius=int(8 * scale), fill=YELLOW)
    draw.text((cx, box_y + int(6 * scale)), mid, font=midf, fill=NAVY, anchor="ma")
    draw.text((cx, box_y + bh + int(10 * scale)), "LUGAR!", font=bot, fill=WHITE, anchor="ma")


def paint_bar(img, box):
    d = ImageDraw.Draw(img)
    d.rectangle(box, fill=NAVY)
    grid = Image.new("RGBA", img.size, CLEAR)
    add_grid(ImageDraw.Draw(grid), box)
    img.alpha_composite(grid)
    add_grain(img, box)


def borders(draw, w, h, thick=22):
    draw.rectangle((0, 0, w - 1, h - 1), outline=NAVY, width=thick)
    inset = thick - 8
    draw.rectangle((inset, inset, w - 1 - inset, h - 1 - inset), outline=YELLOW, width=7)
    inset2 = inset + 7
    draw.rectangle((inset2, inset2, w - 1 - inset2, h - 1 - inset2), outline=GREEN, width=5)


def make_feed():
    w = h = 1080
    img = Image.new("RGBA", (w, h), CLEAR)
    bar_top = 838
    paint_bar(img, (0, bar_top, w, h))
    d = ImageDraw.Draw(img)
    d.rectangle((0, bar_top, w, bar_top + 8), fill=YELLOW)
    d.rectangle((0, bar_top + 8, w, bar_top + 14), fill=GREEN)
    name_lockup(d, 42, 862, scale=0.92)
    number_bubble(d, 778, 930, scale=1.0)
    borders(d, w, h, thick=24)
    return img


def make_story():
    w, h = 1080, 1920
    img = Image.new("RGBA", (w, h), CLEAR)
    paint_bar(img, (0, 0, w, 268))
    paint_bar(img, (0, 1490, w, h))
    d = ImageDraw.Draw(img)
    d.rectangle((0, 268, w, 278), fill=YELLOW)
    d.rectangle((0, 278, w, 286), fill=GREEN)
    d.rectangle((0, 1490, w, 1500), fill=GREEN)
    d.rectangle((0, 1500, w, 1508), fill=YELLOW)
    name_lockup(d, 42, 36, scale=1.08)
    number_bubble(d, 790, 88, scale=0.98)
    pad = 64
    box = (pad, 1548, w - pad, 1878)
    d.rounded_rectangle(box, radius=22, outline=GREEN, width=6)
    slogan(d, w // 2, 1590, scale=1.45)
    borders(d, w, h, thick=22)
    return img


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    feed = make_feed()
    story = make_story()
    feed.save(OUT / "feed-nathan.png", "PNG")
    story.save(OUT / "story-nathan.png", "PNG")
    print("ok", feed.size, story.size)


if __name__ == "__main__":
    main()
