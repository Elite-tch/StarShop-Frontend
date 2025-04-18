"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NFTRewardCard } from "@/components/features/user/nfts/components/NFTRewardCard";
import { ShoppingBag, Gift } from "lucide-react";

export default function ExclusiveNFTRewards() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:scale-[0.92] rounded-2xl border border-white/60 p-[2px] shadow-[0_0_16px_rgba(255,255,255,0.25)] bg-transparent">
      <section className="p-4 sm:p-6 space-y-6">
        
        <div className="text-left space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Exclusive NFT Rewards
          </h2>
          <p className="text-muted-foreground">
            Collect exclusive NFTs by purchasing clothing items, redeem special
            coupons, and earn valuable digital assets.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 🟣 Purchase Rewards */}
          <Card className="bg-muted/5 p-5 space-y-4 border-none shadow-none">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-[#a259ff]" />
              <h3 className="text-lg font-semibold text-white">
                Purchase Rewards
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Earn exclusive NFTs with every clothing purchase. The more you
              shop, the rarer the NFTs you'll collect.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 min-h-[160px]">
              <NFTRewardCard name="Limited Edition Hoodie NFT" value="120" />
              <NFTRewardCard name="Designer Sneakers NFT" value="85" />
            </div>

            <Button className="w-full bg-[#a259ff] text-white hover:bg-[#8f44ff] transition-colors">
              View Upcoming Rewards
            </Button>
          </Card>

          
          <Card className="bg-muted/5 p-5 space-y-4 border-none shadow-none">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-[#3b82f6]" />
              <h3 className="text-lg font-semibold text-white">
                NFT Coupons & Vouchers
              </h3>
            </div>

            <p className="text-sm text-muted-foreground">
              Redeem these special NFT coupons for discounts, exclusive access
              to drops, and special offers.
            </p>

            <div className="space-y-3">
              
              <div className="border border-dashed border-muted-foreground/20 rounded-xl p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-white text-base">
                      25% Off Next Purchase
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Valid until Apr 15, 2024
                    </p>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <span className="text-sm text-green-500 font-medium">
                      Ready to use
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto text-white mt-1 self-center"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>

              
              <div className="border border-dashed border-muted-foreground/20 rounded-xl p-5 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-white text-base">
                      Early Access: Summer Collection
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Unlocks May 1, 2024
                    </p>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#f5c842" }}
                    >
                      Coming soon
                    </span>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto text-white mt-1 self-center"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors">
              Redeem Coupon
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
