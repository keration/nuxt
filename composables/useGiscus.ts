export const useGiscus = () => {
  const updateGiscusTheme = () => {
    const theme = document.documentElement.classList.contains("dark") ? "dark" : "light";

    // 查找Giscus iframe
    const iframe = document.querySelector("iframe.giscus-frame") as HTMLIFrameElement;
    if (iframe) {
      // 发送消息到Giscus iframe更新主题
      iframe.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: theme === "dark" ? "dark" : "light",
            },
          },
        },
        "https://giscus.app",
      );
    }
  };

  // 监听主题变化
  const observeThemeChange = () => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          updateGiscusTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return observer;
  };

  return {
    updateGiscusTheme,
    observeThemeChange,
  };
};
