import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "بستان — عرض تقديمي عن تجارة الأزهار" },
      { name: "description", content: "عرض تقديمي أنيق عن مشروع تجاري للأزهار: الزراعة، السوق، التسويق والأرباح." },
      { property: "og:title", content: "بستان — عرض تقديمي عن تجارة الأزهار" },
      { property: "og:description", content: "مشروع تجاري للأزهار: من البذرة إلى باقة العميل." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

function Blobs() {
  return (
    <>
      <div className="blob bg-primary" style={{ width: 600, height: 600, top: -150, left: -150 }} />
      <div className="blob bg-accent" style={{ width: 500, height: 500, bottom: -150, right: 200 }} />
      <div className="blob bg-lilac" style={{ width: 400, height: 400, top: 300, right: -100 }} />
    </>
  );
}

function Frame({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return (
    <div className="slide-content p-[120px] flex flex-col">
      <Blobs />
      <div className="relative rise">
        <div className="slide-kicker mb-4">{kicker}</div>
        <h2 className="slide-title text-bloom pb-2">{title}</h2>
      </div>
      <div className="relative flex-1 flex items-center rise" style={{ animationDelay: ".15s" }}>{children}</div>
    </div>
  );
}

function Card({ icon, title, text, tone = "bg-bloom" }: { icon: string; title: string; text: string; tone?: string }) {
  return (
    <div className="flex-1 rounded-[40px] bg-card p-12 shadow-bloom min-h-[360px]">
      <div className={`${tone} w-28 h-28 rounded-full flex items-center justify-center text-6xl mb-8`}>{icon}</div>
      <h3 className="slide-subtitle font-bold mb-4">{title}</h3>
      <p className="slide-body text-muted-foreground">{text}</p>
    </div>
  );
}

const slides: { title: string; el: ReactNode }[] = [
  {
    title: "الغلاف",
    el: (
      <div className="slide-content bg-bloom flex items-center justify-center text-center">
        <div className="blob bg-accent" style={{ width: 700, height: 700, top: -200, right: -200, opacity: 0.6 }} />
        <div className="blob bg-lilac" style={{ width: 600, height: 600, bottom: -200, left: -100, opacity: 0.6 }} />
        <div className="relative rise text-primary-foreground">
          <div className="text-[160px] mb-6">🌸🌷🌻</div>
          <h1 className="slide-title-lg">بستان</h1>
          <p className="slide-subtitle mt-6 opacity-95">مشروع تجاري للأزهار — من البذرة إلى باقة العميل</p>
        </div>
      </div>
    ),
  },
  {
    title: "الفكرة",
    el: (
      <Frame kicker="01 — الفكرة" title="لماذا الأزهار؟">
        <ul className="slide-body-lg space-y-8 max-w-[1300px] slide-body">
          <li>🌹 الأزهار حاضرة في كل مناسبة: أفراح، أعياد، تهاني ومواساة.</li>
          <li>💐 طلب متجدد على مدار العام مع مواسم ذروة واضحة.</li>
          <li>🌿 إمكانية الجمع بين الزراعة المحلية والبيع المباشر بهامش ربح جيد.</li>
          <li>🎁 منتج عاطفي يحب الناس إهداءه ومشاركته.</li>
        </ul>
      </Frame>
    ),
  },
  {
    title: "الزراعة",
    el: (
      <Frame kicker="02 — الزراعة" title="كيف نزرع الأزهار؟">
        <div className="flex gap-10 w-full">
          <Card icon="🌱" title="التربة والبذور" text="تربة خصبة جيدة التصريف وبذور أو شتلات من مصادر موثوقة." tone="bg-garden" />
          <Card icon="☀️" title="الضوء والري" text="من 6 إلى 8 ساعات شمس، وري منتظم معتدل حسب نوع الزهرة." tone="bg-garden" />
          <Card icon="🏡" title="البيوت المحمية" text="تحكم بالحرارة والرطوبة لإنتاج مستمر طوال السنة." tone="bg-garden" />
        </div>
      </Frame>
    ),
  },
  {
    title: "الأنواع",
    el: (
      <Frame kicker="03 — المنتجات" title="أزهارنا الأكثر طلبًا">
        <div className="grid grid-cols-4 gap-8 w-full">
          {[["🌹","الورد الجوري"],["🌷","التوليب"],["🌻","دوّار الشمس"],["🌸","الأوركيد"]].map(([i,n])=>(
            <div key={n} className="rounded-[40px] bg-card shadow-bloom p-12 text-center">
              <div className="text-[140px]">{i}</div>
              <div className="slide-subtitle font-bold mt-4">{n}</div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    title: "سلسلة التجارة",
    el: (
      <Frame kicker="04 — التجارة" title="من الحقل إلى العميل">
        <div className="flex items-center gap-6 w-full">
          {[["🌱","الزراعة"],["✂️","القطف"],["❄️","التبريد والتخزين"],["💐","التنسيق"],["🚚","التوصيل"]].map(([i,n],k,a)=>(
            <div key={n} className="flex items-center gap-6 flex-1">
              <div className="flex-1 rounded-[36px] bg-bloom text-primary-foreground p-10 text-center shadow-bloom">
                <div className="text-8xl">{i}</div>
                <div className="slide-body font-bold mt-4">{n}</div>
              </div>
              {k < a.length - 1 && <span className="slide-title text-primary">←</span>}
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    title: "التسويق",
    el: (
      <Frame kicker="05 — التسويق" title="كيف نصل إلى العملاء؟">
        <div className="flex gap-10 w-full">
          <Card icon="📱" title="متجر إلكتروني" text="طلب سريع وتوصيل في نفس اليوم مع بطاقات إهداء." />
          <Card icon="📸" title="وسائل التواصل" text="صور جذابة ومحتوى يومي على إنستغرام وتيك توك." />
          <Card icon="🤝" title="شراكات" text="فنادق، قاعات أفراح، مطاعم وشركات تنظيم مناسبات." />
        </div>
      </Frame>
    ),
  },
  {
    title: "الأرباح",
    el: (
      <Frame kicker="06 — مصادر الدخل" title="كيف يربح المشروع؟">
        <div className="flex gap-10 w-full">
          <Card icon="💐" title="البيع بالتجزئة" text="باقات يومية ومناسبات بأسعار متدرجة." tone="bg-accent" />
          <Card icon="🔁" title="الاشتراكات" text="باقة أسبوعية للمنازل والمكاتب بدخل ثابت." tone="bg-accent" />
          <Card icon="🎉" title="المناسبات" text="تنسيق أفراح وحفلات بعقود ذات قيمة أعلى." tone="bg-accent" />
        </div>
      </Frame>
    ),
  },
  {
    title: "الختام",
    el: (
      <div className="slide-content bg-garden flex items-center justify-center text-center">
        <div className="blob bg-accent" style={{ width: 700, height: 700, bottom: -250, right: -150, opacity: 0.6 }} />
        <div className="blob bg-primary" style={{ width: 500, height: 500, top: -150, left: -100, opacity: 0.5 }} />
        <div className="relative rise text-secondary-foreground">
          <div className="text-[150px]">🌼</div>
          <h2 className="slide-title-lg">لنزرع الجمال معًا</h2>
          <p className="slide-subtitle mt-6">شكرًا لكم — بستان</p>
        </div>
      </div>
    ),
  },
];

function Deck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(0.2);
  const box = useRef<HTMLDivElement>(null);
  const touch = useRef<number | null>(null);
  const go = useCallback((d: number) => setI((v) => Math.max(0, Math.min(slides.length - 1, v + d))), []);

  useEffect(() => {
    const s = Number(new URLSearchParams(location.search).get("slide"));
    if (s >= 1 && s <= slides.length) setI(s - 1);
  }, []);
  useEffect(() => {
    history.replaceState(null, "", `?slide=${i + 1}`);
    document.title = `${i + 1}/${slides.length} — ${slides[i]?.title}`;
  }, [i]);
  useEffect(() => {
    const fit = () => {
      const el = box.current;
      if (el) setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080));
    };
    fit();
    window.addEventListener("resize", fit);
    const key = (e: KeyboardEvent) => {
      if (["ArrowLeft", " ", "PageDown"].includes(e.key)) go(1);
      if (["ArrowRight", "PageUp"].includes(e.key)) go(-1);
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
    };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("resize", fit); window.removeEventListener("keydown", key); };
  }, [go]);

  return (
    <div className="h-screen flex flex-col bg-foreground">
      <div
        ref={box}
        className="relative flex-1 overflow-hidden"
        onTouchStart={(e) => (touch.current = e.touches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          const x = e.changedTouches[0]?.clientX;
          if (touch.current == null || x == null) return;
          const dx = x - touch.current;
          if (Math.abs(dx) > 40) go(dx > 0 ? 1 : -1);
          touch.current = null;
        }}
      >
        <div key={i} className="absolute" style={{ width: 1920, height: 1080, left: "50%", top: "50%", marginLeft: -960, marginTop: -540, transform: `scale(${scale})` }}>
          {slides[i]?.el}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-3 text-background">
        <button onClick={() => go(-1)} disabled={i === 0} className="rounded-full bg-primary text-primary-foreground px-5 py-2 disabled:opacity-40">السابق</button>
        <div className="flex gap-2">
          {slides.map((s, k) => (
            <button key={s.title} aria-label={s.title} onClick={() => setI(k)} className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground"}`} />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={i === slides.length - 1} className="rounded-full bg-primary text-primary-foreground px-5 py-2 disabled:opacity-40">التالي</button>
        <button onClick={() => document.documentElement.requestFullscreen?.()} className="hidden sm:block rounded-full bg-accent text-accent-foreground px-5 py-2">عرض كامل</button>
      </div>
    </div>
  );
}
