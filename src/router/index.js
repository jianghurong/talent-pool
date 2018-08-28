import Vue from 'vue';
import Router from 'vue-router';
import Index from "@/components/view/Index";
import Upload from "@/components/view/Upload";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import List from "@/components/List";
import ResumeUpload from "@/components/ResumeUpload";
import User from "@/components/User";
import PreviewPdf from "@/components/PreviewPdf";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload
    },
    {
      path: "/header",
      name: "Header",
      component: Header
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer
    },
    {
      path: "/list",
      name: "List",
      component: List
    },
    {
      path: "/resumeUpload",
      name: "ResumeLoad",
      component: ResumeUpload
    },
    {
      path: "/user",
      name:　"User",
      component: User
    },
    {
      path: "/previewPdf",
      name:　"PreviewPdf",
      component: PreviewPdf
    }
  ],
  mode: "history"
});
