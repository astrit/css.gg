"use client";

import React, { createContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface Data {
  pages: { [x: string]: any }[];
}

type Types = {
  loading: boolean;
  data: Data | null;
};

export const Controller = createContext<Types>({
  loading: false,
  data: null,
});

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setData(data as Data);
          setLoading(false);
        }, 842);
      });
  }, [pathname, searchParams]);

  const value = {
    loading,
    data,
  };
  return (
    <NextThemesProvider {...props}>
      <Controller.Provider value={value}>{children}</Controller.Provider>
    </NextThemesProvider>
  );
}
