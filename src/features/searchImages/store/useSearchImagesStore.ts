import { INCREMENT_SCORE_VALUE, MAX_SCORE } from "../constants";
import { hasOvercomeMaxScore } from "../utils";
import type { PublicImage, SellerImage } from "@/core/models/seller";
import { defineStore } from "pinia";
import type { Store } from "../types";
import useNewInvoiceStore from "@/features/newInvoice/store/useNewInvoiceStore";

const useSearchImagesStore = defineStore("searchImages", {
  state(): Store {
    return {
      canSearch: false,
      sellers: [],
      error: false,
      term: "",
      loadingTerm: false,
      winningSeller: null,
    };
  },
  getters: {
    existsWinner: (state) => state.winningSeller !== null,
    sellersLength: (state) => state.sellers.length,
    totalScore: (state) => {
      return state.sellers.reduce((accumulator, current) => {
        return accumulator + (current.score || 0);
      }, 0);
    },
  },
  actions: {
    setTerm(term: string) {
      this.term = term;
    },
    updateSellerScore(sellerId: number) {
      const sellerIndex = this.sellers.findIndex(
        (currentSeller) => currentSeller.id === sellerId
      );
      if (sellerIndex === -1) return;
      const seller = this.sellers[sellerIndex];
      this.sellers[sellerIndex].score = hasOvercomeMaxScore(seller.score)
        ? MAX_SCORE
        : (seller.score || 0) + INCREMENT_SCORE_VALUE;
      return this.sellers[sellerIndex];
    },
    blendSellersWithImages(publicImages: PublicImage[]) {
      this.sellers = this.sellers.map((currentSeller, index) => {
        return {
          ...currentSeller,
          image: publicImages[index]?.image,
        };
      });
    },
    checkWinner(seller: SellerImage) {
      const newInvoice = useNewInvoiceStore();
      if (seller.score >= MAX_SCORE) {
        this.winningSeller = { ...seller };
        newInvoice.activeNewInvoice();
      }
    },
    reset() {
      this.$patch({
        canSearch: false,
        error: false,
        term: "",
        loadingTerm: false,
        winningSeller: null,
        sellers: this.sellers.map((currentSeller) => ({
          ...currentSeller,
          score: 0,
        })),
      });
    },
  },
});

export default useSearchImagesStore;
