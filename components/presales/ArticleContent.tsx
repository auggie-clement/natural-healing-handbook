import React from "react";
import {
  Lock,
  Lightbulb,
  Check,
  Truck,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
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
            alt="The Natural Healing Handbook open pages showing recipes"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Narrative Intro */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="font-serif font-bold text-2xl text-ink">
            "I wasn't sick. But I wasn't myself either."
          </p>
          <p>
            That moment sent me down a different path — into the world of
            time-tested remedies and kitchen-table wellness I’d never really
            explored before — toward something more practical, more natural, and
            surprisingly effective.
          </p>
          <p>
            Instead of guessing my way through yet more trendy pills and
            powders, I found a guide written by a master herbalist who’d faced a
            life-threatening health crisis — and came out the other side with a
            deeper understanding of traditional healing.
          </p>
          <p>
            Inside were formulas I’d never seen on wellness blogs. Not vague
            tips or buzzwords — but step-by-step kitchen recipes using
            ingredients like garlic, mint, ginger, and a forgotten flower
            traditionally used to calm tension.
          </p>
          <p className="font-bold text-ink border-l-4 border-brand-green pl-6 py-2 bg-brand-mint/30 rounded-r-lg">
            The real secret wasn't just the ingredients. It was how they were
            combined.
          </p>
        </div>

        {/* Synergy Header */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <Badge variant="brand" className="mb-4">
            Herbal Synergy
          </Badge>
          <h2 className="text-3xl font-serif font-bold text-ink mb-6 leading-tight">
            The Ancient Art Modern Medicine Rarely Mentions
          </h2>
          <p className="text-ink-light text-lg">
            Keep scrolling for 10 ways this book brings together time-tested
            herbal pairings — informed by modern research and crafted from
            ingredients you already have at home.
          </p>
        </div>
      </div>

      {/* Feature Blocks */}
      <div>
        <FeatureBlock
          index={1}
          title="The Overlooked Healing Secret Hiding in Plain Sight"
          imageSrc="https://images.unsplash.com/photo-1532339968504-f149d6915159?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Herbs on table"
        >
          <p>
            For centuries, herbalists have paired plants and natural ingredients
            in precise ways to unlock a synergistic effect. This approach, known
            as herbal synergy, was once dismissed as folk wisdom...
          </p>
          <p className="font-bold text-ink">
            But now, the research is catching up.
          </p>
          <p>
            Studies in <em>Frontiers in Pharmacology</em> and other journals are
            confirming what traditional herbalists have long practiced: that
            some herbal combinations may improve absorption and enhance
            effects.(1)
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={2}
          title="Natural Solutions for Everyday Challenges"
          imageSrc="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1979&auto=format&fit=crop"
          imageAlt="Doctor writing notes"
        >
          <p>
            Whether it's stiff joints, foggy mornings, or restless nights, this
            book shows you how to combine familiar herbs in smarter, more
            intentional ways.
          </p>
          <Card variant="flat" className="p-4 text-ink-light italic text-base">
            "Imagine having a 'pharmacy' in your pantry that doesn't require a
            copay or a waiting room."
          </Card>
        </FeatureBlock>

        <FeatureBlock
          index={3}
          title="Finally — You’re Back in the Driver’s Seat"
          imageSrc="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Senior couple cooking"
        >
          <p>
            Tired of long waits and health advice that feels like it wasn't made
            for you? The Natural Healing Handbook puts simple, time-tested
            herbal strategies at your fingertips.
          </p>
          <p>
            You get clear, easy-to-follow guidance to build daily rituals that
            fit your needs — grounded in herbal tradition and supported by
            modern research.(1)(2)
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={4}
          title="Learn From a Trusted Herbalist"
          imageSrc="https://images.unsplash.com/photo-1598511726623-d233140d343f?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Woman in garden"
        >
          <p>
            Walk into Shanon Greef's clinic in Johannesburg and you won't find
            shelves lined with supplements or a sales pitch — just people
            seeking practical answers they can trust.
          </p>
          <p>
            For over 20 years, she's worked with thousands of individuals using
            the same natural combinations featured in this book.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={5}
          title="No More Guessing"
          imageSrc="https://images.unsplash.com/photo-1556910638-6f77cc6778f6?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Recipe book open"
        >
          <p>
            One of the biggest frustrations in natural health? Not knowing which
            ingredients to combine. The Natural Healing Handbook is organized by
            wellness concern, so you see exactly which herbs pair well and why.
          </p>
          <p>
            No more endless Googling. Just a clear, trusted roadmap built on
            tradition.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={6}
          title="Turn Kitchen Staples Into Smarter Combinations"
          imageSrc="https://images.unsplash.com/photo-1615485925694-a03522f701c0?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Turmeric ginger lemon"
        >
          <p>
            Garlic, lemon, ginger, turmeric — you've probably got them in your
            kitchen. But are you using them like a traditional herbalist would?
          </p>
          <p>
            Just a few smart tweaks turn everyday foods into powerful wellness
            allies — helping support your energy, digestion, and focus.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={7}
          title="Time-Tested Prep Rituals"
          imageSrc="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Handbook open pages"
        >
          <p>
            Whether it's an herb, a spice, or a pantry staple, how you prepare
            it matters. You'll learn traditional extraction methods to transform
            simple teas and tinctures into purpose-driven blends.
          </p>
          <p>
            You don't need rare herbs or high-end supplements — just the
            practical know-how.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={8}
          title="Grow Your Own Herbal Toolkit"
          imageSrc="https://images.unsplash.com/photo-1599598425947-d35270c3259e?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Holding plant with soil"
        >
          <p>
            With the <strong>Backyard Medicine Garden</strong> bonus guide,
            you'll learn how to grow powerful herbs — even if you've never
            planted a thing.
          </p>
          <p>
            From balcony pots to garden beds, this guide walks you through
            growing and harvesting traditional plants known for supporting sleep
            and immune health.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={9}
          title="Be Ready When Life Happens"
          imageSrc="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
          imageAlt="Vintage first aid"
        >
          <p>
            Minor burn? Tension headache? The <strong>Herbal SOS</strong> bonus
            guide gives you trusted herbal strategies you can use right at home.
          </p>
          <p>
            You'll be surprised how much peace of mind one little guide can
            deliver — especially when you need it most.
          </p>
        </FeatureBlock>

        <FeatureBlock
          index={10}
          title="What Happens When You Get Natural Health Right"
          imageSrc="https://images.unsplash.com/photo-1570701564993-e00652af8aa7?q=80&w=1974&auto=format&fit=crop"
          imageAlt="Happy senior couple"
        >
          <p>
            Once you start using these herbal combinations, something subtle but
            powerful can happen: You just might begin to feel more like
            yourself.
          </p>
          <p>
            Not younger. Not "perfect." But perhaps... clearer, lighter, more in
            sync. It's about reclaiming the part of your wellness you can
            actually control.
          </p>
        </FeatureBlock>
      </div>

      {/* Taste Inside Section */}
      <div className="py-12 text-center">
        <div className="inline-flex items-center gap-2 mb-6 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100">
          <Lightbulb className="w-5 h-5 text-yellow-600 fill-current" />
          <span className="font-bold text-yellow-900 text-sm">Preview</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-6">
          Here’s a Taste of What You’ll Find Inside
        </h2>
        <p className="text-ink-light max-w-2xl mx-auto mb-12 text-lg">
          Discover simple, natural blends designed to be easy to make and
          grounded in generations of herbal wisdom.
        </p>
        <Card className="shadow-2xl border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop"
            alt="Recipe preview"
            className="w-full h-auto"
            loading="lazy"
          />
        </Card>
      </div>

      {/* OFFER SECTION REFACTOR */}
      <div id="offer" className="scroll-mt-20">
        <Card className="shadow-2xl ring-1 ring-slate-900/5 bg-white overflow-visible">
          <div className="bg-slate-900 text-white text-center py-3 font-medium text-sm tracking-wide">
            Limited Time: 50% OFF + 2 Free Bonuses
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
                      Value: $60
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
                    The Natural Healing Handbook
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
                        Bonus #1: Backyard Medicine Garden
                      </span>
                      <span className="text-sm text-ink/70">
                        Grow your own pharmacy ($25 Value)
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-mint/40 border border-brand-green/10">
                    <div className="bg-white p-1 rounded-full shadow-sm text-brand-green mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-brand-darkGreen block">
                        Bonus #2: Herbal SOS Guide
                      </span>
                      <span className="text-sm text-ink/70">
                        Quick remedies for emergencies ($20 Value)
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
                      $60
                    </span>
                  </div>
                  <p className="text-green-600 text-sm font-medium mb-6 flex items-center gap-2">
                    <span className="bg-green-100 px-2 py-0.5 rounded text-xs font-bold">
                      SAVE 50%
                    </span>
                    <span>+ $9.99 shipping</span>
                  </p>

                  <Button
                    variant="primary"
                    size="xl"
                    fullWidth
                    className="group"
                    href="/"
                  >
                    YES! GET 50% OFF
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      ➡
                    </span>
                  </Button>

                  <p className="text-center text-xs text-ink-light mt-4 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    30-Day Money Back Guarantee
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
              60-Day "Feel the Difference" Guarantee
            </h3>
            <p className="text-ink/80 text-lg leading-relaxed">
              Try the recipes. Explore the bonus guides. If you don’t feel a
              shift — or just decide it’s not what you hoped — simply request a
              refund.
            </p>
            <p className="font-bold text-ink">
              No questions asked. You have nothing to lose.
            </p>
          </div>
        </div>
      </Card>

      {/* Final Narrative Closure */}
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <p className="text-xl font-serif text-ink italic">
          Don't spend another day feeling stuck or second-guessing your health.
          Reclaim your sense of balance naturally.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="w-full md:w-auto"
          href="/"
        >
          Reclaim Your Health Now ➡
        </Button>
      </div>

      {/* Disclaimers */}
      <div className="text-xs text-ink-lighter space-y-4 pt-12 border-t border-slate-100">
        <p>
          *Special offer valid only for a limited time. 60-day money-back
          guarantee applies to the purchase price of the book only.
        </p>
        <p>(1) Frontiers in Pharmacology (2016); (2) Phytomedicine (2009).</p>
        <p className="italic">
          This guide is not a substitute for medical advice.
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
