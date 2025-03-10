import dynamic from "next/dynamic";

export const components = {
  background: dynamic(() => import("./background")),
  banner_video: dynamic(() => import("./bannerVideo")),
  button: dynamic(() => import("./button")),
  discription: dynamic(() => import("./discription")),
  icon: dynamic(() => import("./icon")),
  image: dynamic(() => import("./image")),
  link: dynamic(() => import("./link")),
  text: dynamic(() => import("./text")),
  title_complex: dynamic(() => import("./titleComplex")),
  title_header: dynamic(() => import("./titleHeader")),
  title_header_gradient: dynamic(() => import("./titleHeaderGradient")),
  
  test_custom: dynamic(() => import("./testCustom")),
  test_custom1: dynamic(() => import("./testCustom1")),
  discription_bold: dynamic(() => import("./discriptionBold")),
  discription_thin: dynamic(() => import("./discriptionThin")),
  discription_semibold: dynamic(() => import("./discriptionSemibold")),
  discriptioncc: dynamic(() => import("./discriptioncc")),
  discriptioncl: dynamic(() => import("./discriptioncl")),
  discriptioncll: dynamic(() => import("./discriptioncll")),
};
