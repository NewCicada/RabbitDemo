// 导入 API
import { getBanners } from "@/api/home";
import { ref } from "vue";

export default function useBanners(distribution = 1) {
  let banners = ref(null);
  getBanners(distribution).then((res) => {
    banners.value = res.result;
  });
  return banners;
}
