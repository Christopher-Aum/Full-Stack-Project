'use strict';
const {SpotImage} = require('../models');
// /** @type {import('sequelize-cli').Migration} */

let options = {}
if(process.env.NODE_ENV = 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await SpotImage.bulkCreate([
    {spotId : '1',
    url: 'https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?w=1800&t=st=1705268806~exp=1705269406~hmac=b0995bca1759fecae5a4d50838dff62f8828bf2a5689128a1f8b62da4b281e9f',
    preview: true},
    {spotId:'1',
    url:'https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?t=st=1705268806~exp=1705269406~hmac=adf8940c9d0f962af8d9dedfd959c158a38e33a7e8fc9c23e371a158ce79d7d1',
    preview:false},
    {spotId: '1',
    url: 'https://media.gettyimages.com/id/128502214/photo/classic-turn-of-the-century-american-house.jpg?s=612x612&w=gi&k=20&c=i4olPZuStzxhaUt8Py7FzUSRaub86j2UdvezcLPtThI=',
    preview:false},
    {spotId: '1',
      url: 'https://media.gettyimages.com/id/1362872948/photo/energy-efficient-house-with-solar-panels-and-wall-battery-for-energy-storage.jpg?s=612x612&w=0&k=20&c=7VyjzkfAbt86XZKmKKrtHxxqXodV7PQUxr5sfrw685c=',
      preview: false},
      {spotId:'1',
      url:'https://media.gettyimages.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=612x612&w=0&k=20&c=fM3a4esJjKfLQrEkljoaQGj86o3wmFTvTttZK-PJ_PE=',
      preview:false},
      {spotId:'2',
    url:'https://media.gettyimages.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=iNaSdrxJt7H37rjQZumXYScrmSTRm2fDJrqZzxpDL_k=',
  preview:true},
  {spotId:'2',
url:'https://media.gettyimages.com/id/1326994520/photo/we-all-deserve-a-fresh-break-from-the-city.jpg?s=612x612&w=0&k=20&c=cdiYaJ2_BDlDkZ5c71LaKRrMxf08pqY5ZW8BUuzT9h4=',
preview:false},
{spotId: '2',
url: 'https://media.gettyimages.com/id/848549286/photo/dream-home-luxury-house-success.jpg?s=612x612&w=0&k=20&c=cjhoNqomNTxgYWxuZ9Ev5PxZh6WY96vvDGf3Hl-7x-U=',
preview:false},
{spotId: '2',
url: 'https://media.gettyimages.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=',
preview: false},
{spotId: '2',
url: 'https://media.gettyimages.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=',
preview: false},
{spotId: '3',
url: 'https://media.gettyimages.com/id/1254871777/photo/modern-minimalist-family-villa.jpg?s=612x612&w=0&k=20&c=IFWrSPJVEajIvY0fkcTDYf93fJvn2oISiiZY6B5GlCI=',
preview:true},
{spotId: '3',
url: 'https://media.gettyimages.com/id/147205642/photo/modern-house-and-yard.jpg?s=612x612&w=0&k=20&c=hWtBdVrncj1tMH_4eYvqK9dlCBmg0COLNEKeHS4Fq2g=',
preview: false},
{spotId: '3',
url: 'https://media.gettyimages.com/id/528700038/photo/small-craftsman-bungalow.jpg?s=612x612&w=0&k=20&c=pF2pC5oY5H5_4JXpErCgcxSa2DGWowxT4FTH1_gF0xM=',
preview: false},
{spotId: '3',
url: 'https://media.gettyimages.com/id/1327080125/photo/triangular-modern-lake-house-at-fall.jpg?s=612x612&w=0&k=20&c=gx4nGwXZ-If9fGXKwYxblB_Li83_ygsCqocc8aWIejU=',
preview: false},
{spotId: '3',
url: 'https://media.gettyimages.com/id/1322138245/photo/modern-family-villa.jpg?s=612x612&w=0&k=20&c=tdIUHLnyJrkACJKeIEcpwONjAJhsSwbt_LAzuk8uPH4=',
preview: false},
{spotId: '4',
url: 'https://media.gettyimages.com/id/1424381581/photo/large-villa-with-two-floors-and-garden-in-ed.jpg?s=612x612&w=0&k=20&c=a_jIm_vR31sYxRlADFKiqOiti8I3XLWau1581GRtnNU=',
preview: true},
{spotId: '4',
url: 'https://media.gettyimages.com/id/168325352/photo/twilight-exterior-of-home-and-landscape.jpg?s=612x612&w=0&k=20&c=Fqq0XI7gOfSQOHZR2yA9LG8yK9i0rPsZBFT4U-zeouE=',
preview: false},
{spotId: '4',
url: 'https://media.gettyimages.com/id/1281554848/photo/dream-home-luxury-house-success-suburban-house.jpg?s=612x612&w=0&k=20&c=TpI1wOZx5-v0GlIfNORAHV7z6Hfd_TRrHKKzxO5nvwI=',
preview: false},
{spotId: '4',
url: 'https://media.gettyimages.com/id/168338782/photo/the-exterior-of-a-home-with-a-landscaped-lawn.jpg?s=612x612&w=0&k=20&c=QscfGN2Ftnjf_Y7ZPYKShEouBd87T4L9df_o7yktuR4=',
preview: false},
{spotId: '4',
url: 'https://media.gettyimages.com/id/1342242296/photo/backyard-of-a-modern-private-house.jpg?s=612x612&w=0&k=20&c=NqN3fwbw02IGya_0njKkHvsn-LqshXnqeOfYWRqtv0o=',
preview: false},
{spotId: '5',
url: 'https://media.gettyimages.com/id/1384831593/photo/beutiful-modern-house-in-sunset-atmoshepre-wtih-solar-panels.jpg?s=612x612&w=0&k=20&c=S1qKbrLfrerC6iEeRIh82U9v3CZEKFivH0AGxSfajwA=',
preview: true},
{spotId: '5',
url: 'https://media.gettyimages.com/id/159087139/photo/exterior-view-of-custom-home.jpg?s=612x612&w=0&k=20&c=Hwqzdvv77rW8Ph1-TYX4qpwvYLcmcCU3_cUD2l6NfcY=',
preview: false},
{spotId: '5',
url: 'https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w=',
preview: false},
{spotId: '5',
url: 'https://media.gettyimages.com/id/533463890/photo/modernist-new-build.jpg?s=612x612&w=0&k=20&c=TYvoSlouYZHJwl8iCmhjAoelCfEXEGicNRgattyqc9Y=',
preview: false},
{spotId: '5',
url: 'https://media.gettyimages.com/id/155374658/photo/large-american-detached-home-with-garden-and-blue-sky.jpg?s=612x612&w=0&k=20&c=-jxhWacK1nuWcnbovLMMyKJA5zDMN_vzpGR41nnqIWQ=',
preview: false},
{spotId: '6',
url: 'https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w=',
preview: true},
{spotId: '6',
url: 'https://media.gettyimages.com/id/533463890/photo/modernist-new-build.jpg?s=612x612&w=0&k=20&c=TYvoSlouYZHJwl8iCmhjAoelCfEXEGicNRgattyqc9Y=',
preview: false},
{spotId: '6',
url: 'https://media.gettyimages.com/id/1382265321/photo/dog-running-in-front-of-house-at-backyard.jpg?s=612x612&w=0&k=20&c=f0IN8EdfJ8Ium-KzQSOXau0G7yjUROr-ICetmbwzyfQ=',
preview: false},
{spotId: '6',
url: 'https://media.gettyimages.com/id/200478951-001/photo/exterior-of-house-sunset.jpg?s=612x612&w=0&k=20&c=CB5AXVTCCzUSyxJox5Zwrck6w4MVB-EKEdT7HQ2ilZI=',
preview: false},
{spotId: '6',
url: 'https://media.gettyimages.com/id/1283532082/photo/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset.jpg?s=612x612&w=0&k=20&c=AlUKu_HgyCeyrpeb9EVx0k8VG_Sngr-BFOO6ZQawS5o=',
preview: false},
{spotId: '7',
url: 'https://media.gettyimages.com/id/1453502204/photo/suburban-home-at-sunset-with-lawn-and-garden-visible.jpg?s=612x612&w=0&k=20&c=AOL4a7rrooWgUILUeCoWDRjhms9xs_2RtgN7PR4zw_4=',
preview: true},
{spotId: '7',
url: 'https://media.gettyimages.com/id/680520047/photo/self-build-country-home-morning-mist.jpg?s=612x612&w=0&k=20&c=Gv1sVZG1xiIHQtyFaSPyCrjg4ot78Xcq8O9Z94tU5N4=',
preview: false},
{spotId: '7',
url: 'https://media.gettyimages.com/id/1342950752/photo/front-facade-of-a-contemporary-home-on-a-late-afternoon.jpg?s=612x612&w=0&k=20&c=Bq41bnDim4yKuMhI4l__qBy8RZ90RZ1FG0GCIeQu1-w=',
preview: false},
{spotId: '7',
url: 'https://media.gettyimages.com/id/200122390-001/photo/white-wooden-house-flowers-blooming-around-front-porch.jpg?s=612x612&w=0&k=20&c=Y74KLUKaKgsCv4BtTRuHpI1-zyULJql44NCSvug_DXM=',
preview: false},
{spotId: '7',
url: 'https://media.gettyimages.com/id/545878239/photo/one-family-house-with-garden.jpg?s=612x612&w=0&k=20&c=fnOb-NJlph94njS_N1fYHt4A8kvuFkh6Ic0hxUhuO2k=',
preview: false},
{spotId: '8',
url: 'https://media.gettyimages.com/id/173426398/photo/family-home-front.jpg?s=612x612&w=0&k=20&c=3UV5xt6qQwr5wwUD5GqcRnGg-C1Gt0I4Qc1ImoyoXqs=',
preview: true},
{spotId: '8',
url: 'https://media.gettyimages.com/id/130408311/photo/pool-outside-modern-house-at-twilight.jpg?s=612x612&w=0&k=20&c=mIO9oyI8_tJCgoKlJT1dXTv0Ot0Gc4RD1Yk7W1b2euI=',
preview: false},
{spotId: '8',
url: 'https://media.gettyimages.com/id/1436398636/photo/sofa-with-coffee-table-by-window-in-living-room.jpg?s=612x612&w=0&k=20&c=0CQ_6hbcBUr2LGc3NnJ7IVndRyx7NTLNKby7m2av-20=',
preview: false},
{spotId: '8',
url: 'https://media.gettyimages.com/id/480288634/photo/beautiful-modern-house-in-the-forest-outdoor.jpg?s=612x612&w=0&k=20&c=55zaJilr4w0edenFv0nwxDTNiiitS2WIAgGC3eRzk_k=',
preview: false},
{spotId: '8',
url: 'https://media.gettyimages.com/id/168252802/photo/the-exterior-of-a-houses-second-floor-during-the-day.jpg?s=612x612&w=0&k=20&c=oQ62gBL9RX9kOMxiuaz4hfU7dXs6ww-KD5hLhhtQ2_I=',
preview: false},
{spotId: '9',
url: 'https://media.gettyimages.com/id/1222428750/photo/aerial-view-of-a-modern-american-craftsman-style-house-exterior.jpg?s=612x612&w=0&k=20&c=nWtmnnLWcXpJ9frhPhn6MjfXG-vskZKka0a62IXYZFI=',
preview: true},
{spotId: '9',
url: 'https://media.gettyimages.com/id/1156192691/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=qWOc3hY5sZphs3IabtE3msxLO9W6GJfCJYKoxzYXSQQ=',
preview: false},
{spotId: '9',
url: 'https://media.gettyimages.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?s=612x612&w=0&k=20&c=lcwiyJqjUoIM0FfRb3TwV2BzUY8RS7oT9zFmZGv4nLI=',
preview: false},
{spotId: '9',
url: 'https://media.gettyimages.com/id/1299954175/photo/modern-cubic-villa.jpg?s=612x612&w=0&k=20&c=tRgfZoCR56km3RywUm3Mj4GnsE5Wac7G1Wom36fcLGI=',
preview: false},
{spotId: '9',
url: 'https://media.gettyimages.com/id/168376723/photo/new-house-home-view-from-garden-with-way-einfamilienhaus.jpg?s=612x612&w=0&k=20&c=glYN_nsdvHxr4yD5Ye-6nTL0XxLFAgCEwSlTgDqwkGY=',
preview: false},
{spotId: '10',
url: 'https://media.gettyimages.com/id/519516493/photo/front-lawn-of-suburban-house.jpg?s=612x612&w=0&k=20&c=SUKlXu-1nWYk7MveyKoupWuwneBAecn21cEuVl_OB2c=',
preview: true},
{spotId: '10',
url: 'https://media.gettyimages.com/id/1171461000/photo/modern-two-story-home-in-miami-with-yard-and-swimming-pool.jpg?s=612x612&w=0&k=20&c=r6nczzDP8dJJ-VF1YLYvOG5JtvJqMtTBfX3w3smVkqg=',
preview: false},
{spotId: '10',
url: 'https://media.gettyimages.com/id/1342242355/photo/large-backyard.jpg?s=612x612&w=0&k=20&c=AEldaVEC5QohbQqDYw1kp16WnUgNwZtliT4eFcpKXyM=',
preview: false},
{spotId: '10',
url: 'https://media.gettyimages.com/id/81888267/photo/facade-of-new-home.jpg?s=612x612&w=0&k=20&c=GALPoUrPQOnIWB2sS_0IyHsBYTwCGx4WBhJaqX7LvgE=',
preview: false},
{spotId: '10',
url: 'https://media.gettyimages.com/id/1191772225/photo/open-garage-with-concrete-driveway.jpg?s=612x612&w=0&k=20&c=I1MqMje-hrKZvF0D7wbfMnZyGZDMwlVPSSzc-fmTmto=',
preview: false},
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      url: {[Op.in]: [
        'https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?w=1800&t=st=1705268806~exp=1705269406~hmac=b0995bca1759fecae5a4d50838dff62f8828bf2a5689128a1f8b62da4b281e9f',
        'https://img.freepik.com/free-photo/leisure-beautiful-health-garden-landscape_1203-4856.jpg?t=st=1705268806~exp=1705269406~hmac=adf8940c9d0f962af8d9dedfd959c158a38e33a7e8fc9c23e371a158ce79d7d1',
        'https://media.gettyimages.com/id/128502214/photo/classic-turn-of-the-century-american-house.jpg?s=612x612&w=gi&k=20&c=i4olPZuStzxhaUt8Py7FzUSRaub86j2UdvezcLPtThI=',
        'https://media.gettyimages.com/id/1362872948/photo/energy-efficient-house-with-solar-panels-and-wall-battery-for-energy-storage.jpg?s=612x612&w=0&k=20&c=7VyjzkfAbt86XZKmKKrtHxxqXodV7PQUxr5sfrw685c=',
        'https://media.gettyimages.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=612x612&w=0&k=20&c=fM3a4esJjKfLQrEkljoaQGj86o3wmFTvTttZK-PJ_PE=',

        'https://media.gettyimages.com/id/1269776313/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=iNaSdrxJt7H37rjQZumXYScrmSTRm2fDJrqZzxpDL_k=',
        'https://media.gettyimages.com/id/1326994520/photo/we-all-deserve-a-fresh-break-from-the-city.jpg?s=612x612&w=0&k=20&c=cdiYaJ2_BDlDkZ5c71LaKRrMxf08pqY5ZW8BUuzT9h4=',
        'https://media.gettyimages.com/id/848549286/photo/dream-home-luxury-house-success.jpg?s=612x612&w=0&k=20&c=cjhoNqomNTxgYWxuZ9Ev5PxZh6WY96vvDGf3Hl-7x-U=',
        'https://media.gettyimages.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=',
        'https://media.gettyimages.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=',

        'https://media.gettyimages.com/id/1254871777/photo/modern-minimalist-family-villa.jpg?s=612x612&w=0&k=20&c=IFWrSPJVEajIvY0fkcTDYf93fJvn2oISiiZY6B5GlCI=',
        'https://media.gettyimages.com/id/147205642/photo/modern-house-and-yard.jpg?s=612x612&w=0&k=20&c=hWtBdVrncj1tMH_4eYvqK9dlCBmg0COLNEKeHS4Fq2g=',
        'https://media.gettyimages.com/id/528700038/photo/small-craftsman-bungalow.jpg?s=612x612&w=0&k=20&c=pF2pC5oY5H5_4JXpErCgcxSa2DGWowxT4FTH1_gF0xM=',
        'https://media.gettyimages.com/id/1327080125/photo/triangular-modern-lake-house-at-fall.jpg?s=612x612&w=0&k=20&c=gx4nGwXZ-If9fGXKwYxblB_Li83_ygsCqocc8aWIejU=',
        'https://media.gettyimages.com/id/1322138245/photo/modern-family-villa.jpg?s=612x612&w=0&k=20&c=tdIUHLnyJrkACJKeIEcpwONjAJhsSwbt_LAzuk8uPH4=',

        'https://media.gettyimages.com/id/1424381581/photo/large-villa-with-two-floors-and-garden-in-ed.jpg?s=612x612&w=0&k=20&c=a_jIm_vR31sYxRlADFKiqOiti8I3XLWau1581GRtnNU=',
        'https://media.gettyimages.com/id/168325352/photo/twilight-exterior-of-home-and-landscape.jpg?s=612x612&w=0&k=20&c=Fqq0XI7gOfSQOHZR2yA9LG8yK9i0rPsZBFT4U-zeouE=',
        'https://media.gettyimages.com/id/1281554848/photo/dream-home-luxury-house-success-suburban-house.jpg?s=612x612&w=0&k=20&c=TpI1wOZx5-v0GlIfNORAHV7z6Hfd_TRrHKKzxO5nvwI=',
        'https://media.gettyimages.com/id/168338782/photo/the-exterior-of-a-home-with-a-landscaped-lawn.jpg?s=612x612&w=0&k=20&c=QscfGN2Ftnjf_Y7ZPYKShEouBd87T4L9df_o7yktuR4=',
        'https://media.gettyimages.com/id/1342242296/photo/backyard-of-a-modern-private-house.jpg?s=612x612&w=0&k=20&c=NqN3fwbw02IGya_0njKkHvsn-LqshXnqeOfYWRqtv0o=',

        'https://media.gettyimages.com/id/1384831593/photo/beutiful-modern-house-in-sunset-atmoshepre-wtih-solar-panels.jpg?s=612x612&w=0&k=20&c=S1qKbrLfrerC6iEeRIh82U9v3CZEKFivH0AGxSfajwA=',
        'https://media.gettyimages.com/id/159087139/photo/exterior-view-of-custom-home.jpg?s=612x612&w=0&k=20&c=Hwqzdvv77rW8Ph1-TYX4qpwvYLcmcCU3_cUD2l6NfcY=',
        'https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w=',
        'https://media.gettyimages.com/id/533463890/photo/modernist-new-build.jpg?s=612x612&w=0&k=20&c=TYvoSlouYZHJwl8iCmhjAoelCfEXEGicNRgattyqc9Y=',
        'https://media.gettyimages.com/id/155374658/photo/large-american-detached-home-with-garden-and-blue-sky.jpg?s=612x612&w=0&k=20&c=-jxhWacK1nuWcnbovLMMyKJA5zDMN_vzpGR41nnqIWQ=',

        'https://media.gettyimages.com/id/155283916/photo/white-colored-house-with-blue-door.jpg?s=612x612&w=0&k=20&c=jwCxQtuO4UM3JXc8lLVEsY1h_9n4lQxIjvXQI0moo8w=',
        'https://media.gettyimages.com/id/533463890/photo/modernist-new-build.jpg?s=612x612&w=0&k=20&c=TYvoSlouYZHJwl8iCmhjAoelCfEXEGicNRgattyqc9Y=',
        'https://media.gettyimages.com/id/1382265321/photo/dog-running-in-front-of-house-at-backyard.jpg?s=612x612&w=0&k=20&c=f0IN8EdfJ8Ium-KzQSOXau0G7yjUROr-ICetmbwzyfQ=',
        'https://media.gettyimages.com/id/200478951-001/photo/exterior-of-house-sunset.jpg?s=612x612&w=0&k=20&c=CB5AXVTCCzUSyxJox5Zwrck6w4MVB-EKEdT7HQ2ilZI=',
        'https://media.gettyimages.com/id/1283532082/photo/luxurious-beautiful-modern-villa-with-front-yard-garden-at-sunset.jpg?s=612x612&w=0&k=20&c=AlUKu_HgyCeyrpeb9EVx0k8VG_Sngr-BFOO6ZQawS5o=',

        'https://media.gettyimages.com/id/1453502204/photo/suburban-home-at-sunset-with-lawn-and-garden-visible.jpg?s=612x612&w=0&k=20&c=AOL4a7rrooWgUILUeCoWDRjhms9xs_2RtgN7PR4zw_4=',
        'https://media.gettyimages.com/id/680520047/photo/self-build-country-home-morning-mist.jpg?s=612x612&w=0&k=20&c=Gv1sVZG1xiIHQtyFaSPyCrjg4ot78Xcq8O9Z94tU5N4=',
        'https://media.gettyimages.com/id/1342950752/photo/front-facade-of-a-contemporary-home-on-a-late-afternoon.jpg?s=612x612&w=0&k=20&c=Bq41bnDim4yKuMhI4l__qBy8RZ90RZ1FG0GCIeQu1-w=',
        'https://media.gettyimages.com/id/200122390-001/photo/white-wooden-house-flowers-blooming-around-front-porch.jpg?s=612x612&w=0&k=20&c=Y74KLUKaKgsCv4BtTRuHpI1-zyULJql44NCSvug_DXM=',
        'https://media.gettyimages.com/id/545878239/photo/one-family-house-with-garden.jpg?s=612x612&w=0&k=20&c=fnOb-NJlph94njS_N1fYHt4A8kvuFkh6Ic0hxUhuO2k=',

        'https://media.gettyimages.com/id/173426398/photo/family-home-front.jpg?s=612x612&w=0&k=20&c=3UV5xt6qQwr5wwUD5GqcRnGg-C1Gt0I4Qc1ImoyoXqs=',
        'https://media.gettyimages.com/id/130408311/photo/pool-outside-modern-house-at-twilight.jpg?s=612x612&w=0&k=20&c=mIO9oyI8_tJCgoKlJT1dXTv0Ot0Gc4RD1Yk7W1b2euI=',
        'https://media.gettyimages.com/id/1436398636/photo/sofa-with-coffee-table-by-window-in-living-room.jpg?s=612x612&w=0&k=20&c=0CQ_6hbcBUr2LGc3NnJ7IVndRyx7NTLNKby7m2av-20=',
        'https://media.gettyimages.com/id/480288634/photo/beautiful-modern-house-in-the-forest-outdoor.jpg?s=612x612&w=0&k=20&c=55zaJilr4w0edenFv0nwxDTNiiitS2WIAgGC3eRzk_k=',
        'https://media.gettyimages.com/id/168252802/photo/the-exterior-of-a-houses-second-floor-during-the-day.jpg?s=612x612&w=0&k=20&c=oQ62gBL9RX9kOMxiuaz4hfU7dXs6ww-KD5hLhhtQ2_I=',

        'https://media.gettyimages.com/id/1222428750/photo/aerial-view-of-a-modern-american-craftsman-style-house-exterior.jpg?s=612x612&w=0&k=20&c=nWtmnnLWcXpJ9frhPhn6MjfXG-vskZKka0a62IXYZFI=',
        'https://media.gettyimages.com/id/1156192691/photo/suburban-house.jpg?s=612x612&w=0&k=20&c=qWOc3hY5sZphs3IabtE3msxLO9W6GJfCJYKoxzYXSQQ=',
        'https://media.gettyimages.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?s=612x612&w=0&k=20&c=lcwiyJqjUoIM0FfRb3TwV2BzUY8RS7oT9zFmZGv4nLI=',
        'https://media.gettyimages.com/id/1299954175/photo/modern-cubic-villa.jpg?s=612x612&w=0&k=20&c=tRgfZoCR56km3RywUm3Mj4GnsE5Wac7G1Wom36fcLGI=',
        'https://media.gettyimages.com/id/168376723/photo/new-house-home-view-from-garden-with-way-einfamilienhaus.jpg?s=612x612&w=0&k=20&c=glYN_nsdvHxr4yD5Ye-6nTL0XxLFAgCEwSlTgDqwkGY=',

        'https://media.gettyimages.com/id/519516493/photo/front-lawn-of-suburban-house.jpg?s=612x612&w=0&k=20&c=SUKlXu-1nWYk7MveyKoupWuwneBAecn21cEuVl_OB2c=',
        'https://media.gettyimages.com/id/1171461000/photo/modern-two-story-home-in-miami-with-yard-and-swimming-pool.jpg?s=612x612&w=0&k=20&c=r6nczzDP8dJJ-VF1YLYvOG5JtvJqMtTBfX3w3smVkqg=',
        'https://media.gettyimages.com/id/1342242355/photo/large-backyard.jpg?s=612x612&w=0&k=20&c=AEldaVEC5QohbQqDYw1kp16WnUgNwZtliT4eFcpKXyM=',
        'https://media.gettyimages.com/id/81888267/photo/facade-of-new-home.jpg?s=612x612&w=0&k=20&c=GALPoUrPQOnIWB2sS_0IyHsBYTwCGx4WBhJaqX7LvgE=',
        'https://media.gettyimages.com/id/1191772225/photo/open-garage-with-concrete-driveway.jpg?s=612x612&w=0&k=20&c=I1MqMje-hrKZvF0D7wbfMnZyGZDMwlVPSSzc-fmTmto='
      ]}
    })
  }
};
