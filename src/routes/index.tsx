import { createFileRoute } from "@tanstack/react-router";
import cover from "@/assets/cover.jpg";
import greenhouse from "@/assets/greenhouse.jpg";
import garden from "@/assets/garden.jpg";
import seeds from "@/assets/seeds.jpg";
import rose from "@/assets/rose.jpg";
import tulip from "@/assets/tulip.jpg";
import sunflower from "@/assets/sunflower.jpg";
import orchid from "@/assets/orchid.jpg";
import wedding from "@/assets/wedding.jpg";
import birthday from "@/assets/birthday.jpg";
import graduation from "@/assets/graduation.jpg";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "روضة البستان — عرض تقديمي عن تجارة الأزهار" },
      { name: "description", content: "عرض تقديمي أنيق عن مشروع تجاري للأزهار: الزراعة، السوق، التسويق والأرباح." },
      { property: "og:title", content: "روضة البستان — عرض تقديمي عن تجارة الأزهار" },
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
      <div className="slide-content flex items-center justify-center text-center">
        <img src={cover} alt="باقة ورد طبيعي" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative rise text-primary-foreground">
          <div className="slide-kicker !text-accent mb-6">مشروع تجاري للأزهار</div>
          <h1 className="slide-title-lg">روضة البستان</h1>
          <p className="slide-subtitle mt-6">من البذرة إلى باقة العميل</p>
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
        <div className="grid grid-cols-3 gap-10 w-full">
          {[[seeds,"🌱 البذور والتربة","بذور موثوقة وتربة خصبة جيدة التصريف."],[garden,"🌷 البساتين المفتوحة","شمس من 6 إلى 8 ساعات وري معتدل منتظم."],[greenhouse,"🏡 البيوت المحمية","تحكم بالحرارة والرطوبة لإنتاج طوال السنة."]].map(([img,t,d])=>(
            <div key={t} className="rounded-[40px] bg-card shadow-bloom overflow-hidden">
              <img src={img} alt={t} loading="lazy" width={1024} height={1024} className="w-full h-[440px] object-cover" />
              <div className="p-8">
                <h3 className="slide-subtitle font-bold mb-3">{t}</h3>
                <p className="slide-caption text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    title: "الأنواع",
    el: (
      <Frame kicker="03 — المنتجات" title="أزهارنا الأكثر طلبًا">
        <div className="grid grid-cols-4 gap-8 w-full">
          {[[rose,"الورد الجوري"],[tulip,"التوليب"],[sunflower,"دوّار الشمس"],[orchid,"الأوركيد"]].map(([i,n])=>(
            <div key={n} className="rounded-[40px] bg-card shadow-bloom p-6 text-center">
              <img src={i} alt={n} loading="lazy" className="w-full aspect-square object-cover rounded-[28px]" />
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
    title: "المناسبات",
    el: (
      <Frame kicker="05 — المناسبات" title="تنسيقات وباقات لكل مناسبة">
        <div className="grid grid-cols-3 gap-10 w-full">
          {[[wedding,"الأفراح والخطوبة","تنسيق الطاولات والكوشة وباقات العروس."],[birthday,"أعياد الميلاد","باقات ملوّنة مغلّفة مع بطاقة تهنئة."],[graduation,"التخرج والتهاني","صناديق ورد أنيقة بلمسة شخصية."]].map(([img,t,d])=>(
            <div key={t} className="relative h-[680px] rounded-[40px] overflow-hidden shadow-bloom">
              <img src={img} alt={t} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-foreground/90 to-transparent text-primary-foreground">
                <h3 className="slide-subtitle font-bold">{t}</h3>
                <p className="slide-caption mt-2">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Frame>
    ),
  },
  {
    title: "التسويق",
    el: (
      <Frame kicker="06 — التسويق" title="كيف نصل إلى العملاء؟">
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
      <Frame kicker="07 — مصادر الدخل" title="كيف يربح المشروع؟">
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
          
          <h2 className="slide-title-lg">لنزرع الجمال معًا</h2>
          <p className="slide-subtitle mt-6">شكرًا لكم — روضة البستان</p>
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
