import Image from 'next/image';
import styled from 'styled-components'

const $ProductDelivery = styled.div`
    display: flex;
    align-items: center;
    margin-top: .5rem;

    > span {
        margin-left: .5rem;
    }
`

const ProductDelivery = ({ deliveryType }) => {

    let deliveryInfo;

    if (deliveryType === 0) {
        deliveryInfo = (
            <$ProductDelivery>
                <Image src={'/assets/images/delivery.svg'} width="20" height="20" />
                <span>Ücretsiz Kargo</span>
            </$ProductDelivery>
        )
    } else if (deliveryType === 1) {
        deliveryInfo = (
            <$ProductDelivery>
                <Image src={'/assets/images/delivery.svg'} width="20" height="20" />
                <span>Ücretsiz - Aynı Gün Kargo</span>
            </$ProductDelivery>
        )
    } else if (deliveryType === 2) {
        deliveryInfo = <$ProductDelivery><span>Ücretli Kargo</span></$ProductDelivery>
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
