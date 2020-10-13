import { create } from "@storybook/theming"
import { colors, typography } from "../src/shared/styles"

export default create({
	base: "light",
	colorPrimary: colors.primary,
	colorSecondary: colors.secondary,
	colorTertiary: colors.tertiary,
	fontBase: typography.type.primary,
})
