import HeroBackground from '../../assets/hero.png'
import Line from '../../assets/line.svg'
import FBIcon from '../../assets/fb.svg'
import InstagramIcon from '../../assets/instagram.svg'
import TwitterIcon from '../../assets/twitter.svg'

const TextReverse = props => {
  return <span className='text-white bg-black rounded-2xl'>{props.children}</span>
}

export default function Hero() {
  return (
    <div className='bg-no-repeat bg-cover pt-24 pb-96' style={{ backgroundImage: `url(${HeroBackground})` }}>
      <div className='max-w-7xl m-auto flex flex-col gap-12'>
        <h1 className='text-[140px] font-bold tracking-tight'>
          Trusted <TextReverse>Partner</TextReverse> for Your Website <TextReverse>Develop.</TextReverse>
        </h1>
        <div className='flex gap-60'>
          <div className='flex'>
            <span className='-rotate-90 text-lg' style={{ transformOrigin: '145% 45%'}}>@thanhlm</span>
            <div className='flex flex-col-reverse gap-3 items-center'>
              <img src={Line} alt='line' />
              <img src={FBIcon} alt='facebook' />
              <img src={InstagramIcon} alt='instagram' />
              <img src={TwitterIcon} alt='twitter' />
            </div>
          </div>
          <div className='max-w-96 flex flex-col gap-4 items-start'>
            <p className='text-base'>
              Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design,
              and dev.
            </p>
            <button className='flex items-center gap-2 py-3 px-4 rounded-full border border-black'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
              </svg>
              <span>Start Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
