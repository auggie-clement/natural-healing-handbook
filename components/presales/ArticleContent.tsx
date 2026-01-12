import React from "react";
import { Lock, Check, Truck, ShieldCheck, CreditCard } from "lucide-react";
import { FeatureBlock } from "./ui/FeatureBlock";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

const Comment: React.FC<{
  name: string;
  text: string;
  img: string;
  date?: string;
}> = ({ name, text, img, date = "Just now" }) => (
  <div className="flex gap-4 items-start py-6 border-b border-slate-100 last:border-0">
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-slate-100">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1">
      <div className="flex items-baseline justify-between mb-1">
        <h4 className="font-bold text-ink text-sm">{name}</h4>
        <span className="text-ink-light text-xs">{date}</span>
      </div>
      <p className="text-sm text-ink/80 mb-3 leading-relaxed">{text}</p>
      <div className="flex items-center gap-4 text-xs">
        <Button
          variant="ghost"
          size="sm"
          className="!px-2 !py-1 h-auto text-ink-light font-medium"
        >
          Like
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="!px-2 !py-1 h-auto text-ink-light font-medium"
        >
          Reply
        </Button>
      </div>
    </div>
  </div>
);

export const ArticleContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Intro Section */}
      <div className="prose prose-lg prose-slate max-w-none text-ink/80">
        {/* Main Hero Image - Book Spread */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-elevated ring-1 ring-black/5">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000&auto=format&fit=crop"
            alt="Ancient Apothecary Handbook mockup with 3-Layer Safety System"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Narrative Intro */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="font-serif font-bold text-2xl text-ink">
            I wasn't sick. But I wasn't okay either.
          </p>
          <p>
            That nagging feeling of "something's off"—the fatigue that coffee
            couldn't fix, the digestive issues that came and went, the sleep
            that never quite refreshed me.
          </p>
          <p className="font-serif italic text-ink">Sound familiar?</p>
          <p>
            Like many health-conscious adults over 40, I'd grown tired of the
            same story: $200 doctor visits. Ten-minute appointments. "Here's a
            prescription, bye."
          </p>
          <p>So I did what millions of us do.</p>
          <p>
            I went down the rabbit hole. Herbal blogs. Facebook groups. YouTube
            videos. Grandma's recipes. Essential oil sellers.
          </p>
          <p className="font-bold text-ink">
            And here's what I learned: I'm not against natural remedies. I'm
            against guessing.
          </p>
          <p>Because conflicting advice isn't just frustrating. It's dangerous.</p>
          <p>
            One site says elderberry is a miracle. Another warns it can worsen
            certain conditions. One "expert" pushes oregano oil for everything.
            A nurse friend says never give it to kids.
          </p>
          <p className="font-serif text-xl text-ink">
            Who do you trust when you're exhausted, stressed, and someone you
            love needs help NOW?
          </p>
          <p className="font-bold text-ink border-l-4 border-brand-green pl-6 py-2 bg-brand-mint/30 rounded-r-lg">
            What you need isn't more information. You need a system.
          </p>
        </div>

        {/* Synergy Header */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <Badge variant="brand" className="mb-4">
            Introducing: The 3-Layer Safety-First System
          </Badge>
          <h2 className="text-3xl font-serif font-bold text-ink mb-6 leading-tight">
            The Real Problem Isn't "Natural vs. Conventional"
          </h2>
          <p className="text-ink-light text-lg">
            Healthcare feels rushed or expensive → you turn to online advice →
            conflicting claims + MLM hype everywhere → you're scared of making a
            mistake → you either freeze... or experiment blindly. Neither option
            is good. This handbook closes that trust gap with a clear,
            safety-first system.
          </p>
          <p className="text-ink-light text-lg">
            This approach powers the Ancient Apothecary Handbook—and it changes
            everything:
          </p>
          <p className="text-ink-light text-lg">
            Layer 1 — Quick-Start First Steps: Lowest-risk options you can try
            immediately
          </p>
          <p className="text-ink-light text-lg">
            Layer 2 — Safety Flags: Who should avoid what (pregnancy, kids,
            elderly, med interactions)
          </p>
          <p className="text-ink-light text-lg">
            Layer 3 — Escalation Triggers: Clear "stop and get help" signals so
            you know when home care isn't enough
          </p>
        </div>
      </div>

      {/* Feature Blocks */}
      <div>
        <FeatureBlock
          index={1}
          title="It Ends the '47 Screenshots' Problem"
          imageSrc="https://images.unsplash.com/photo-1532339968504-f149d6915159?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Herbs on table"
        >
          <p>
            You know that feeling. Saving posts. Bookmarking blogs. Pinning
            recipes. And when you actually need help? You can't find
            anything—or the advice contradicts itself.
          </p>
          <p className="font-bold text-ink">
            This handbook replaces the chaos.
          </p>
          <p>
            One organized reference. Symptom-indexed. Ready when you need it—not
            buried in your phone somewhere.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={2}
          title="Zero MLM Hype. Zero Miracle Claims."
          imageSrc="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1979&auto=format&fit=crop"
          imageAlt="Doctor writing notes"
        >
          <p>
            "I really hate the snake oil stuff out there," one reader told me.
            "Too many MLM sellers making crazy claims. It makes people think all
            natural remedies are a scam."
          </p>
          <p>That frustration built this book.</p>
          <Card variant="flat" className="p-4 text-ink-light italic text-base">
            No essential oil pitch. No "cure everything" nonsense. Just
            practical guidance from traditional wisdom—presented honestly.
          </Card>
        </FeatureBlock>

        <FeatureBlock
          index={3}
          title="The 'What to Try First' Approach Saves Time and Worry"
          imageSrc="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Senior couple cooking"
        >
          <p>
            Instead of 47 options, you get a ranked starting point.
          </p>
          <p>
            Upset stomach? Here's the lowest-risk option to try first. Skin
            irritation? Start here, watch for this, escalate if that.
          </p>
          <Card variant="flat" className="p-4 text-ink-light italic text-base">
            ⭐⭐⭐⭐⭐ "I used to feel so helpless. Now I have a whole shelf of
            tinctures AND I know when they're not enough. I feel in control of
            my health for once." — Margaret T., Ohio
          </Card>
        </FeatureBlock>

        <FeatureBlock
          index={4}
          title="Real Safety Warnings That Other Books Skip"
          imageSrc="https://images.unsplash.com/photo-1598511726623-d233140d343f?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Woman in garden"
        >
          <p>
            Pregnant? There's a caution. Taking blood thinners? You'll see a
            flag. Young kids or elderly parents? The guide adapts.
          </p>
          <p>
            "I've got kids and parents to think about," one caregiver shared. "If
            there's an interaction risk, I want it spelled out."
          </p>
          <p className="font-bold text-ink">This book spells it out.</p>
        </FeatureBlock>

        <FeatureBlock
          index={5}
          title="The 'When to Get Help' Lists Remove the Guilt"
          imageSrc="https://images.unsplash.com/photo-1556910638-6f77cc6778f6?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Recipe book open"
        >
          <p>
            Here's something no one talks about: the shame when natural doesn't
            work.
          </p>
          <p>
            "Nothing helped... You feel so stupid hoping this tea or that pill
            will finally fix it."
          </p>
          <p>
            This guide builds in the "escalation trigger" so you never feel like
            a failure. Sometimes natural isn't enough. That's not defeat—that's
            smart decision-making.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={6}
          title="Works at 2 AM When You're Exhausted"
          imageSrc="https://images.unsplash.com/photo-1615485925694-a03522f701c0?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Turmeric ginger lemon"
        >
          <p>
            No cover-to-cover reading required. Symptom index. Quick tabs.
            Decision trees.
          </p>
          <p>
            When you're tired and stressed and someone wakes you up feeling
            awful—you can find what you need in under 60 seconds.
          </p>
          <Card variant="flat" className="p-4 text-ink-light italic text-base">
            ⭐⭐⭐⭐⭐ "Thank God for this guide. When my daughter had a fever at
            midnight, I knew exactly what to try—and what would mean we needed
            the ER. No panic. Just clarity." — Linda R., Texas
          </Card>
        </FeatureBlock>

        <FeatureBlock
          index={7}
          title="Kitchen + Backyard Focus (No Expensive Supplements Required)"
          imageSrc="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Handbook open pages"
        >
          <p>
            Most remedies use what's already in your pantry.
          </p>
          <p>
            Ginger. Honey. Apple cider vinegar. Chamomile. Garlic.
          </p>
          <p>
            No special purchases. No "buy my tincture line." Just accessible
            options that actually work—the same ones your grandparents relied
            on.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={8}
          title="It Respects Modern Medicine (No Anti-Doctor Ideology)"
          imageSrc="https://images.unsplash.com/photo-1599598425947-d35270c3259e?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Holding plant with soil"
        >
          <p>
            "I want to feel prepared—without acting like modern medicine is
            evil."
          </p>
          <p>
            This isn't a "replace your doctor" book.
          </p>
          <p>
            It's a "sensible first steps when appropriate" reference—with clear
            guidance on when conventional care is the right call. Integration,
            not ideology.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={9}
          title="Built for Real Life (Big Font. Printable. Easy Index.)"
          imageSrc="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Vintage first aid"
        >
          <p>
            We know who uses books like this. Tired parents. Older adults with
            reading glasses. People who don't want to squint at tiny text.
          </p>
          <p>Large, clear print. Printable pages. Simple organization.</p>
          <Card variant="flat" className="p-4 text-ink-light italic text-base">
            ⭐⭐⭐⭐⭐ "The book and pages are easy to read—I just love it! Finally
            something I can use without my reading glasses and actually find
            what I need." — Carol B., Florida
          </Card>
        </FeatureBlock>

        <FeatureBlock
          index={10}
          title="It Pays for Itself After One Avoided Urgent Care Trip"
          imageSrc="https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Happy senior couple"
        >
          <p>What's one unnecessary $200 doctor visit worth?</p>
          <p>One panicked 2 AM drive to urgent care?</p>
          <p>One bottle of supplements you bought because an influencer recommended them?</p>
          <p>This handbook costs $37.</p>
          <p>
            Make one better decision—skip one unnecessary expense or one risky
            experiment—and it's already paid for itself.
          </p>
        </FeatureBlock>
      </div>

      {/* OFFER SECTION REFACTOR */}
      <div id="offer" className="scroll-mt-20">
        <Card className="shadow-2xl ring-1 ring-slate-900/5 bg-white overflow-visible">
          <div className="bg-slate-900 text-white text-center py-3 font-medium text-sm tracking-wide">
            🎉 NEW YEAR SPECIAL — GET 75% OFF + 2 FREE BONUS GUIDES — LIMITED TIME! 🎁
          </div>

          <div className="p-6 md:p-10 lg:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Product Stack */}
              <div className="flex flex-col items-center">
                <div className="relative mb-8 group cursor-pointer">
                  <div className="absolute top-2 left-2 w-full h-full bg-slate-100 rounded-lg transform -rotate-6 transition-transform group-hover:-rotate-8 border border-slate-200"></div>
                  <div className="absolute top-2 right-2 w-full h-full bg-slate-50 rounded-lg transform rotate-6 transition-transform group-hover:rotate-8 border border-slate-200"></div>
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop"
                    alt="Handbook Bundle"
                    className="relative z-10 w-64 md:w-80 rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-6 -right-6 z-20">
                    <Badge
                      variant="accent"
                      className="text-sm py-2 px-4 shadow-lg border-yellow-300 bg-yellow-300 text-yellow-900 rotate-12"
                    >
                      Save $112
                    </Badge>
                  </div>
                </div>
                <div className="text-center space-y-2 mt-4">
                  <div className="inline-flex gap-2 items-center text-xs text-ink-light">
                    <CreditCard className="w-4 h-4" />
                    <span>Secure checkout</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <Truck className="w-4 h-4" />
                    <span>Fast shipping</span>
                  </div>
                </div>
              </div>

              {/* Right: Value Prop */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-ink mb-2">
                    Ancient Apothecary Handbook
                  </h3>
                  <p className="text-ink-light">
                    Complete Physical + Digital Edition
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-mint/40 border border-brand-green/10">
                    <div className="bg-white p-1 rounded-full shadow-sm text-brand-green mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-brand-darkGreen block">
                        BONUS #1: Backyard Medicine Garden Quick-Start Guide
                      </span>
                      <span className="text-sm text-ink/70">
                        Which healing plants to grow, how to harvest, when to use
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-mint/40 border border-brand-green/10">
                    <div className="bg-white p-1 rounded-full shadow-sm text-brand-green mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-brand-darkGreen block">
                        BONUS #2: Emergency Preparedness Herbal Kit Checklist
                      </span>
                      <span className="text-sm text-ink/70">
                        For when you can't get to a pharmacy
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-mint/40 border border-brand-green/10">
                    <div className="bg-white p-1 rounded-full shadow-sm text-brand-green mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-brand-darkGreen block">
                        BONUS #3: Printable Quick-Reference Cards
                      </span>
                      <span className="text-sm text-ink/70">
                        Laminate and keep in your kitchen or medicine cabinet
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-black text-ink tracking-tight">
                      $37
                    </span>
                    <span className="text-xl text-ink-light line-through mb-1 decoration-red-500 decoration-2">
                      $149
                    </span>
                  </div>
                  <p className="text-green-600 text-sm font-medium mb-6 flex items-center gap-2">
                    <span className="bg-green-100 px-2 py-0.5 rounded text-xs font-bold">
                      SAVE $112 — New Year Special (Limited Time)
                    </span>
                    <span>
                      + $9.99 shipping for your spiral-bound physical copy, delivered via first-class mail
                    </span>
                  </p>

                  <Button
                    variant="primary"
                    size="xl"
                    fullWidth
                    className="group"
                    href="/"
                  >
                    YES, SEND ME THE HANDBOOK
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      ➡
                    </span>
                  </Button>

                  <p className="text-center text-xs text-ink-light mt-4 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    Secure checkout • Order now for guaranteed bonuses and limited-time pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Guarantee Section Refactor */}
      <Card className="bg-slate-50 border-slate-200 p-8 md:p-12 overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <ShieldCheck className="w-full h-full text-brand-darkGreen relative z-10" />
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink">
              🛡️ 60-Day "Confident Caregiver" Guarantee 🛡️
            </h3>
            <p className="text-ink/80 text-lg leading-relaxed">
              Here's the deal: Use the handbook. Try the remedies. Reference it
              the next time someone in your family doesn't feel well.
            </p>
            <p className="font-bold text-ink">
              If you don't feel calmer, more confident, and more in control of
              your family's health—or if you just decide it's not for you—simply
              let us know within 60 days.
            </p>
            <p className="font-bold text-ink">
              Full refund. No questions. No hassle. This isn't just a
              guarantee—it's a promise that your trust matters more than a sale.
            </p>
          </div>
        </div>
      </Card>

      {/* Final Narrative Closure */}
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <p className="text-xl font-serif text-ink italic">
          Don't spend another night second-guessing yourself. Don't let the
          Trust Gap Spiral keep you frozen—or pushing you toward risky
          experiments.
        </p>
        <p className="text-ink/80">
          Join thousands of caregivers who've replaced confusion with
          confidence. Get your Ancient Apothecary Handbook today—while the New
          Year special pricing lasts.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="w-full md:w-auto"
          href="/"
        >
          YES, I WANT CONFIDENT CAREGIVING →
        </Button>
      </div>

      {/* Disclaimers */}
      <div className="text-xs text-ink-lighter space-y-4 pt-12 border-t border-slate-100">
        <p>
          *Special offer valid only for a limited time. Bonus guides available
          exclusively with the purchase of the Ancient Apothecary Handbook
          through this page. 60-day money-back guarantee applies to the purchase
          price of the handbook only and does not include shipping costs.
        </p>
        <p>
          Disclaimer: This handbook provides educational information about
          traditional and home remedies. It is not intended as medical advice,
          diagnosis, or treatment. Always consult with a qualified healthcare
          provider for medical concerns. See a doctor immediately for serious
          symptoms or emergencies.
        </p>
      </div>

      {/* Comments Section */}
      <div className="pt-12">
        <h3 className="font-bold text-ink mb-6 text-xl flex items-center gap-2">
          <span className="w-1 h-6 bg-brand-blue rounded-full"></span>
          Community Comments
        </h3>

        <Card className="p-6 mb-8 bg-slate-50 border-none shadow-inner">
          <textarea
            className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none bg-white transition-shadow"
            rows={3}
            placeholder="Join the conversation..."
          ></textarea>
          <div className="mt-2 flex justify-end">
            <Button variant="secondary" size="sm">
              Post Comment
            </Button>
          </div>
        </Card>

        <div className="space-y-2">
          <Comment
            name="Samantha L."
            text="The Ginger Lemon Elixir is my favorite — super refreshing and easy to make!"
            img="https://randomuser.me/api/portraits/women/44.jpg"
            date="1 day ago"
          />
          <Comment
            name="Karen T."
            text="Hey Lisa, this looks like something you'd love for your natural remedies collection!"
            img="https://randomuser.me/api/portraits/women/17.jpg"
            date="15 hours ago"
          />
          <Comment
            name="Mike K."
            text="The section on respiratory support has great ideas. I've been making the Cinnamon-Ginger blend regularly."
            img="https://randomuser.me/api/portraits/men/45.jpg"
            date="8 hours ago"
          />
           <Comment
            name="Diane P."
            text="I got this book for my sister, and she's loving it! She's especially into the Women's Health section."
            img="https://randomuser.me/api/portraits/women/55.jpg"
            date="2 hours ago"
          />
        </div>

        <div className="mt-8 text-center">
          <Button variant="ghost" size="sm">
            Load more comments
          </Button>
        </div>
      </div>
    </div>
  );
};
