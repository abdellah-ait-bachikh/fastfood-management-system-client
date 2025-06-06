import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

import PieChart from '../Piechart'
import { useSelector } from 'react-redux'
import { THomeInitialState } from '@renderer/lib/types'

const ChartSlider: React.FC = () => {
  const { topPopularOffers, topPopularProducts, topPopularDeleverys } = useSelector(
    (state: { home: THomeInitialState }) => state.home
  )
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {topPopularProducts && topPopularOffers && (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <PieChart
              title="Produits"
              labels={topPopularProducts?.map((item) => `${item.category.name} ${item.name}`)}
              series={topPopularProducts?.map((item) => item.quantity)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PieChart
              title="Packes"
              labels={topPopularOffers?.map((item) => item.name)}
              series={topPopularOffers?.map((item) => item.quantity)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PieChart
              title="Livreus"
              labels={topPopularDeleverys?.map((item) => item.userName)}
              series={topPopularDeleverys?.map((item) => item.paymentsCount)}
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  )
}

export default ChartSlider
