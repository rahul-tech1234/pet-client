// "use client";

// import { useTheme } from "next-themes";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//       Toggle {theme === "dark" ? "Light" : "Dark"} Mode
//     </button>
//   );
// }

"use client";

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";


export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      isIconOnly
      radius="full"
      variant="light"
      onPress={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <FiSun className="size-5" />
      ) : (
        <FiMoon className="size-5" />
      )}
    </Button>
  );
}