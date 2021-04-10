import { useColorMode} from 'theme-ui'
import styles from "../styles.module.css";

export const ThemeManager: React.FC = () => {
   const [colorMode, setColorMode] = useColorMode()

  return (
    <label
    className={styles.container}
    title={(colorMode === 'dark') ? "Activate light mode" : "Activate dark mode"}
    aria-label={(colorMode === 'dark') ? "Activate light mode" : "Activate dark mode"}
  >
    <input type="checkbox" onChange={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }} />
    <div />
  </label>
  )
}
