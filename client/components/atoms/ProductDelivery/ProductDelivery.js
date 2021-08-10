import Image from 'next/image';
import styled from 'styled-components'

const $ProductDelivery = styled.div`
    display: flex;
    align-items: center;
    margin-top: .5rem;
    min-height: 22px;
`

const $ImageWrapper = styled.div`
    margin-right: .5rem;
    height: 22px;
`

const ProductDelivery = ({ deliveryType }) => {

    let deliveryInfo;

    if (deliveryType === 0) {
        deliveryInfo = (
            <$ProductDelivery>
                <$ImageWrapper>
                    <Image src={'/assets/images/delivery.svg'} width="22" height="22" />
                </$ImageWrapper>
                <span>Ücretsiz Kargo</span>
            </$ProductDelivery>
        )
    } else if (deliveryType === 1) {
        deliveryInfo = (
            <$ProductDelivery>
                <$ImageWrapper>
                    <Image src={'/assets/images/delivery.svg'} width="22" height="22" />
                </$ImageWrapper>
                <span>Ücretsiz - Aynı Gün Kargo</span>
            </$ProductDelivery>
        )
    } else if (deliveryType === 2) {
        deliveryInfo = <$ProductDelivery />
    } else {
        return null;
    }

    return (
        <div>
            {
                deliveryInfo
            }
        </div>
    )
}

export default ProductDelivery;
