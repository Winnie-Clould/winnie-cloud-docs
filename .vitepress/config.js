import { defineConfig } from "vitepress";

export default defineConfig({
    title: "维尼云帮助中心",
    description: "维尼云帮助中心",
    lang: "zh-CN",
    lastUpdated: true,
    outDir: "./dist",
    srcDir: "./src",
    cleanUrls: "without-subfolders",
    themeConfig: {
        outlineTitle: "在这一页上",
        sidebar: [
            {
                text: "客户端使用教程",
                items: [
                    { text: "Windows", link: "/windows" },
                    { text: "Android", link: "/android" },
                    { text: "iOS", link: "/ios" },
                    { text: "HarmonyOS", link: "/harmonyos" },
                    { text: "macOS", link: "/macos" },
                ],
            },
        ],
        lastUpdatedText: "修改日期",
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        search: {
            provider: 'local',
        }
    },
});
