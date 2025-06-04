import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

import PieChart from '../Piechart'

const ChartSlider: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <PieChart title="Produits" labels={['A', 'B', 'C']} series={[30, 40, 30]} />
        </SwiperSlide>
        <SwiperSlide>
          <PieChart title="Livreurs" labels={['X', 'Y', 'Z']} series={[25, 25, 50]} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ChartSlider
