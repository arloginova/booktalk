import { TDynamicTagProps } from '@/shared/types'

type TUiTypographyTextProps = {
	font: 'Raleway-M' | 'Raleway-SB' | 'Muller-R' | 'Muller-M'
	isNoWrap?: boolean
}
type TUiTypographyProps<T = {}> = TDynamicTagProps<TUiTypographyTextProps & T>
type TFontInfo = [
	string,
	'T' | 'EL' | 'L' | 'R' | 'M' | 'SB' | 'B' | 'EB' | 'BL' | 'HE'
]

const UiTypography: TUiTypographyProps = ({
	tag: Tag,
	font,
	isNoWrap = false,
	...props
}) => {
	const FONT_INFO: TFontInfo = font.split('-') as TFontInfo
	let WEIGHT:
		| 100
		| 200
		| 300
		| 400
		| 500
		| 600
		| 700
		| 800
		| 900
		| 1000
		| 'normal' = 'normal'

	switch (FONT_INFO[1]) {
		case 'T':
			WEIGHT = 100
			break
		case 'EL':
			WEIGHT = 200
			break
		case 'L':
			WEIGHT = 300
			break
		case 'R':
			WEIGHT = 400
			break
		case 'M':
			WEIGHT = 500
			break
		case 'SB':
			WEIGHT = 600
			break
		case 'B':
			WEIGHT = 700
			break
		case 'EB':
			WEIGHT = 800
			break
		case 'BL':
			WEIGHT = 900
			break
		case 'HE':
			WEIGHT = 1000
			break
	}

	return (
		//@ts-ignore: Сложный тип
		<Tag
			{...props}
			style={{
				fontFamily: FONT_INFO[0],
				fontWeight: WEIGHT,
				whiteSpace: isNoWrap ? 'nowrap' : 'pre-wrap',
			}}
		/>
	)
}

export { UiTypography, type TUiTypographyProps, type TUiTypographyTextProps }
