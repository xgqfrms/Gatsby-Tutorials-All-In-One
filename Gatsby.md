# Gatsby



## 禁用 gatsby telemetry


```sh
 Gatsby collects anonymous usage analytics                            ║
║   to help improve Gatsby for all users.                                ║
║                                                                        ║
║   If you'd like to opt-out, you can use `gatsby telemetry --disable`   ║
║   To learn more, checkout https://gatsby.dev/telemetry
```

https://gatsby.dev/telemetry

```diff
  "scripts": {
-   "dev": "gatsby develop",
+   "dev": "gatsby telemetry --disable && gatsby develop",
  },

```


![image](https://user-images.githubusercontent.com/7291672/198360146-f0111c93-2e1a-4380-afeb-119b9044f6eb.png)

macOS version

```diff
  "scripts": {
-   "dev": "gatsby develop",
+   "dev": "GATSBY_TELEMETRY_DISABLED=1 && gatsby develop",
  },

```

![image](https://user-images.githubusercontent.com/7291672/198360252-0d8e0636-27e5-4aaa-9191-756006e0fab1.png)
