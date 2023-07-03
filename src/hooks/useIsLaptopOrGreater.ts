import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../tailwind.config.ts'
import useWindowSize from './useWindowSize.ts'

const useIsLaptopOrGreater = () => {
  const size = useWindowSize()
  const fullConfig = resolveConfig(tailwindConfig) as any

  const isLaptopOrGreater =
    size[0] > Number(fullConfig.theme.screens.md.replaceAll('px', ''))
  return isLaptopOrGreater
}

export default useIsLaptopOrGreater
