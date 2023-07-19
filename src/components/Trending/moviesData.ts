// // moviesData.ts
import download from '../../assets/download.jpg';
import image from '../../assets/image_f8f780a620.png';
import images from '../../assets/images.jpg';


export interface Movie {
  src: string;
  title: string;
  main: string;
  runtime: string;
}

export const moviesData: Movie[] = [
  {
    src: download, title: "download", main: "huu huu", runtime: '120m'
  },
  {
    src: image, title: "image_f8f780a620", main: "image_f8f780a620", runtime: '120m'
  },

  {
    src: images, title: "images", main: "huu huu", runtime: '120m'
  },

  {
    src: images, title: "images", main: "huu huu", runtime: '120m'
  },
];