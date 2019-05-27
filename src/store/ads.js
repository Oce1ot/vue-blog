export default {
  state: {
    ads: [
      {
        title: 'first title',
        description: 'hello i am desc',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '123',
      },
      {
        title: 'second title',
        description: 'hello i am desc2',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '1234',
      },
      {
        title: 'third title',
        description: 'hello i am desc3',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '1235',
      },
    ],
  },
  mutations: {
    createAd(state,payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    createAd({commit}, payload) {
      payload.id = 44;
      commit('createAd', payload);
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return (adId) => {
       return state.ads.find(ads => ads.id == adId );
      };
    },
  },
};
