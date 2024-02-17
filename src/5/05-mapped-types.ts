type PcBrand = {
    name: string,
    country: string,
    createAt: Date
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei'

type MyPcRecord = {
    // "?" знак делает чтобы присутствие всех названий из WellKnownBrands были не обязательны
    [BrandKey in WellKnownBrands]?: PcBrand
}

const brandRecord: MyPcRecord = {
    apple: {
        name: 'apple',
        country: 'USA',
        createAt: new Date()
    },
    huawei: {
        name: 'huawei',
        country: 'china',
        createAt: new Date()
    }
}

function printPcCatalog(pcCatalog: MyPcRecord) {
    console.log(pcCatalog.hp?.country);
}

type PartOfWindow = {
    [Key in 'document' | 'screen' | 'navigator']?: Window[Key]
}

const p: PartOfWindow = {
    screen: window.screen,
    navigator: window.navigator
}


export { }