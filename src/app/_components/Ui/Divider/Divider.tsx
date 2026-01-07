import style from './Divider.module.sass'

interface DividerProps {
    deko?: boolean
    circleSize?: number
    lineLength?: number
    orientation: 'horizontal' | 'vertical'
    flexDir?: 'row' | 'column'
    className?: string
}
export function Divider({
    deko = true,
    circleSize = 6,
    lineLength = 100,
    orientation = 'horizontal',
    flexDir = 'row',
    className,
}: DividerProps) {
    return (
        <div
            className={`${style.deko} ${className ?? ''}`}
            style={{ flexDirection: flexDir }}
            aria-orientation={orientation}
            role="separator"
        >
            {deko === true ? (
                <div className={style.circle} style={{ width: circleSize, height: circleSize }}></div>
            ) : null}
            {orientation === 'horizontal' ? (
                <hr className={style.line} style={{ width: `${lineLength}%` }} />
            ) : (
                <div className={style.vertical_line} style={{ height: `${lineLength}%` }} />
            )}
            {deko === true ? (
                <div className={style.circle} style={{ width: circleSize, height: circleSize }}></div>
            ) : null}
        </div>
    )
}
