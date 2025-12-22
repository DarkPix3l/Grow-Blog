'use client'

import Image from 'next/image'
import style from './NotFoundComponent.module.sass'

export default function NotFoundComponent({ errorMessage, imgW, imgH }: { errorMessage: string, imgW:number, imgH:number }) {
    return (
        <div className={style.err_mess}
        >
            <Image
                src={'/img/fallback/notFound.webp'}
                alt="missing image"
                width={imgW}
                height={imgH}
            />
            <p>{errorMessage}</p>
        </div>
    )
}
