import {Injectable} from '@angular/core';


interface WINE {
  accuracy: {
    test: number,
    training: number,
  },
  featureImportance: any[],
  predictions?: any,
  columns?: any,
}

const whiteWine: WINE = {
  accuracy: {
    test: 0.521088435374,
    training: 0.541423570595,
  },
  featureImportance: [
    ['alcohol     ', 0.115958],
    ['density', 0.103242],
    ['volatile acidity    ', 0.100965],
    ['free sulfur dioxide ', 0.096563],
    ['total sulfur dioxide', 0.090816],
    ['residual sugar ', 0.086444],
    ['chlorides   ', 0.085341],
    ['pH  ', 0.084654],
    ['citric acid    ', 0.081165],
    ['sulphates ', 0.080709],
    ['fixed acidity  ', 0.074144],
  ],

};


const redWine: WINE = {

  accuracy: {
    test: 0.622916666667,
    training: 0.572832886506,
  },
  featureImportance: [
    [' alcohol        ', 0.139313],
    [' sulphates ', 0.115662],
    [' volatile acidity    ', 0.108089],
    [' total sulfur dioxide', 0.102579],
    [' density   ', 0.087899],
    [' chlorides ', 0.078694],
    [' pH   ', 0.077515],
    [' fixed acidity  ', 0.075735],
    [' citric acid    ', 0.075266],
    [' residual sugar ', 0.071744],
  ],

};


const classifiedWine: WINE = {

  accuracy: {
    test: 1,
    training: 1,
  },
  // svc
  predictions: [
    [13.74, 1.6699999999999999, 2.25, 16.399999999999999, 118.0, 2.6000000000000001, 2.8999999999999999, 0.20999999999999999, 1.6200000000000001, 5.8499999999999996, 0.92000000000000004, 3.2000000000000002, 1060.0, 1, 1],
    [12.789999999999999, 2.6699999999999999, 2.48, 22.0, 112.0, 1.48, 1.3600000000000001, 0.23999999999999999, 1.26, 10.800000000000001, 0.47999999999999998, 1.47, 480.0, 3, 3],
    [12.369999999999999, 1.1299999999999999, 2.1600000000000001, 19.0, 87.0, 3.5, 3.1000000000000001, 0.19, 1.8700000000000001, 4.4500000000000002, 1.22, 2.8700000000000001, 420.0, 2, 2],
    [13.56, 1.73, 2.46, 20.5, 116.0, 2.96, 2.7799999999999998, 0.20000000000000001, 2.4500000000000002, 6.25, 0.97999999999999998, 3.0299999999999998, 1120.0, 1, 1],
    [13.050000000000001, 5.7999999999999998, 2.1299999999999999, 21.5, 86.0, 2.6200000000000001, 2.6499999999999999, 0.29999999999999999, 2.0099999999999998, 2.6000000000000001, 0.72999999999999998, 3.1000000000000001, 380.0, 2, 2],
    [11.56, 2.0499999999999998, 3.23, 28.5, 119.0, 3.1800000000000002, 5.0800000000000001, 0.46999999999999997, 1.8700000000000001, 6.0, 0.93000000000000005, 3.6899999999999999, 465.0, 2, 2],
    [14.06, 2.1499999999999999, 2.6099999999999999, 17.600000000000001, 121.0, 2.6000000000000001, 2.5099999999999998, 0.31, 1.25, 5.0499999999999998, 1.0600000000000001, 3.5800000000000001, 1295.0, 1, 1],
    [12.359999999999999, 3.8300000000000001, 2.3799999999999999, 21.0, 88.0, 2.2999999999999998, 0.92000000000000004, 0.5, 1.04, 7.6500000000000004, 0.56000000000000005, 1.5800000000000001, 520.0, 3, 3],
    [12.25, 1.73, 2.1200000000000001, 19.0, 80.0, 1.6499999999999999, 2.0299999999999998, 0.37, 1.6299999999999999, 3.3999999999999999, 1.0, 3.1699999999999999, 510.0, 2, 2],
    [12.08, 1.8300000000000001, 2.3199999999999998, 18.5, 81.0, 1.6000000000000001, 1.5, 0.52000000000000002, 1.6399999999999999, 2.3999999999999999, 1.0800000000000001, 2.27, 480.0, 2, 2],
    [13.359999999999999, 2.5600000000000001, 2.3500000000000001, 20.0, 89.0, 1.3999999999999999, 0.5, 0.37, 0.64000000000000001, 5.5999999999999996, 0.69999999999999996, 2.4700000000000002, 780.0, 3, 3],
    [13.880000000000001, 5.04, 2.23, 20.0, 80.0, 0.97999999999999998, 0.34000000000000002, 0.40000000000000002, 0.68000000000000005, 4.9000000000000004, 0.57999999999999996, 1.3300000000000001, 415.0, 3, 3],
    [14.199999999999999, 1.76, 2.4500000000000002, 15.199999999999999, 112.0, 3.27, 3.3900000000000001, 0.34000000000000002, 1.97, 6.75, 1.05, 2.8500000000000001, 1450.0, 1, 1],
    [12.369999999999999, 1.0700000000000001, 2.1000000000000001, 18.5, 88.0, 3.52, 3.75, 0.23999999999999999, 1.95, 4.5, 1.04, 2.77, 660.0, 2, 2],
    [13.58, 2.5800000000000001, 2.6899999999999999, 24.5, 105.0, 1.55, 0.83999999999999997, 0.39000000000000001, 1.54, 8.6600000000000001, 0.73999999999999999, 1.8, 750.0, 3, 3],
    [12.0, 0.92000000000000004, 2.0, 19.0, 86.0, 2.4199999999999999, 2.2599999999999998, 0.29999999999999999, 1.4299999999999999, 2.5, 1.3799999999999999, 3.1200000000000001, 278.0, 2, 2],
    [13.76, 1.53, 2.7000000000000002, 19.5, 132.0, 2.9500000000000002, 2.7400000000000002, 0.5, 1.3500000000000001, 5.4000000000000004, 1.25, 3.0, 1235.0, 1, 1],
    [14.19, 1.5900000000000001, 2.48, 16.5, 108.0, 3.2999999999999998, 3.9300000000000002, 0.32000000000000001, 1.8600000000000001, 8.6999999999999993, 1.23, 2.8199999999999998, 1680.0, 1, 1],
    [12.640000000000001, 1.3600000000000001, 2.02, 16.800000000000001, 100.0, 2.02, 1.4099999999999999, 0.53000000000000003, 0.62, 5.75, 0.97999999999999998, 1.5900000000000001, 450.0, 2, 2],
    [13.83, 1.6499999999999999, 2.6000000000000001, 17.199999999999999, 94.0, 2.4500000000000002, 2.9900000000000002, 0.22, 2.29, 5.5999999999999996, 1.24, 3.3700000000000001, 1265.0, 1, 1],
    [13.109999999999999, 1.01, 1.7, 15.0, 78.0, 2.98, 3.1800000000000002, 0.26000000000000001, 2.2799999999999998, 5.2999999999999998, 1.1200000000000001, 3.1800000000000002, 502.0, 2, 2],
    [13.050000000000001, 1.6499999999999999, 2.5499999999999998, 18.0, 98.0, 2.4500000000000002, 2.4300000000000002, 0.28999999999999998, 1.4399999999999999, 4.25, 1.1200000000000001, 2.5099999999999998, 1105.0, 1, 1],
    [13.24, 2.5899999999999999, 2.8700000000000001, 21.0, 118.0, 2.7999999999999998, 2.6899999999999999, 0.39000000000000001, 1.8200000000000001, 4.3200000000000003, 1.04, 2.9300000000000002, 735.0, 1, 1],
    [12.51, 1.73, 1.98, 20.5, 85.0, 2.2000000000000002, 1.9199999999999999, 0.32000000000000001, 1.48, 2.9399999999999999, 1.04, 3.5699999999999998, 672.0, 2, 2],
    [12.33, 1.1000000000000001, 2.2799999999999998, 16.0, 101.0, 2.0499999999999998, 1.0900000000000001, 0.63, 0.40999999999999998, 3.27, 1.25, 1.6699999999999999, 680.0, 2, 2],
    [12.52, 2.4300000000000002, 2.1699999999999999, 21.0, 88.0, 2.5499999999999998, 2.27, 0.26000000000000001, 1.22, 2.0, 0.90000000000000002, 2.7799999999999998, 325.0, 2, 2],
    [12.43, 1.53, 2.29, 21.5, 86.0, 2.7400000000000002, 3.1499999999999999, 0.39000000000000001, 1.77, 3.9399999999999999, 0.68999999999999995, 2.8399999999999999, 352.0, 2, 2],
    [12.16, 1.6100000000000001, 2.3100000000000001, 22.800000000000001, 90.0, 1.78, 1.6899999999999999, 0.42999999999999999, 1.5600000000000001, 2.4500000000000002, 1.3300000000000001, 2.2599999999999998, 495.0, 2, 2],
    [11.76, 2.6800000000000002, 2.9199999999999999, 20.0, 103.0, 1.75, 2.0299999999999998, 0.59999999999999998, 1.05, 3.7999999999999998, 1.23, 2.5, 607.0, 2, 2],
    [13.779999999999999, 2.7599999999999998, 2.2999999999999998, 22.0, 90.0, 1.3500000000000001, 0.68000000000000005, 0.40999999999999998, 1.03, 9.5800000000000001, 0.69999999999999996, 1.6799999999999999, 615.0, 3, 3],
    [13.390000000000001, 1.77, 2.6200000000000001, 16.100000000000001, 93.0, 2.8500000000000001, 2.9399999999999999, 0.34000000000000002, 1.45, 4.7999999999999998, 0.92000000000000004, 3.2200000000000002, 1195.0, 1, 1],
    [14.220000000000001, 1.7, 2.2999999999999998, 16.300000000000001, 118.0, 3.2000000000000002, 3.0, 0.26000000000000001, 2.0299999999999998, 6.3799999999999999, 0.93999999999999995, 3.3100000000000001, 970.0, 1, 1],
    [12.039999999999999, 4.2999999999999998, 2.3799999999999999, 22.0, 80.0, 2.1000000000000001, 1.75, 0.41999999999999998, 1.3500000000000001, 2.6000000000000001, 0.79000000000000004, 2.5699999999999998, 580.0, 2, 2],
    [14.210000000000001, 4.04, 2.4399999999999999, 18.899999999999999, 111.0, 2.8500000000000001, 2.6499999999999999, 0.29999999999999999, 1.25, 5.2400000000000002, 0.87, 3.3300000000000001, 1080.0, 1, 1],
    [14.83, 1.6399999999999999, 2.1699999999999999, 14.0, 97.0, 2.7999999999999998, 2.98, 0.28999999999999998, 1.98, 5.2000000000000002, 1.0800000000000001, 2.8500000000000001, 1045.0, 1, 1],
    [13.050000000000001, 1.77, 2.1000000000000001, 17.0, 107.0, 3.0, 3.0, 0.28000000000000003, 2.0299999999999998, 5.04, 0.88, 3.3500000000000001, 885.0, 1, 1],
    [13.69, 3.2599999999999998, 2.54, 20.0, 107.0, 1.8300000000000001, 0.56000000000000005, 0.5, 0.80000000000000004, 5.8799999999999999, 0.95999999999999996, 1.8200000000000001, 680.0, 3, 3],
    [12.69, 1.53, 2.2599999999999998, 20.699999999999999, 80.0, 1.3799999999999999, 1.46, 0.57999999999999996, 1.6200000000000001, 3.0499999999999998, 0.95999999999999996, 2.0600000000000001, 495.0, 2, 2],
    [11.619999999999999, 1.99, 2.2799999999999998, 18.0, 98.0, 3.02, 2.2599999999999998, 0.17000000000000001, 1.3500000000000001, 3.25, 1.1599999999999999, 2.96, 345.0, 2, 2],
    [13.4, 3.9100000000000001, 2.48, 23.0, 102.0, 1.8, 0.75, 0.42999999999999999, 1.4099999999999999, 7.2999999999999998, 0.69999999999999996, 1.5600000000000001, 750.0, 3, 3],
    [13.5, 1.8100000000000001, 2.6099999999999999, 20.0, 96.0, 2.5299999999999998, 2.6099999999999999, 0.28000000000000003, 1.6599999999999999, 3.52, 1.1200000000000001, 3.8199999999999998, 845.0, 1, 1],
    [13.73, 1.5, 2.7000000000000002, 22.5, 101.0, 3.0, 3.25, 0.28999999999999998, 2.3799999999999999, 5.7000000000000002, 1.1899999999999999, 2.71, 1285.0, 1, 1],
    [12.289999999999999, 2.8300000000000001, 2.2200000000000002, 18.0, 88.0, 2.4500000000000002, 2.25, 0.25, 1.99, 2.1499999999999999, 1.1499999999999999, 3.2999999999999998, 290.0, 2, 2],
    [12.6, 1.3400000000000001, 1.8999999999999999, 18.5, 88.0, 1.45, 1.3600000000000001, 0.28999999999999998, 1.3500000000000001, 2.4500000000000002, 1.04, 2.77, 562.0, 2, 2],
    [11.41, 0.73999999999999999, 2.5, 21.0, 88.0, 2.48, 2.0099999999999998, 0.41999999999999998, 1.4399999999999999, 3.0800000000000001, 1.1000000000000001, 2.3100000000000001, 434.0, 2, 2],
    [13.640000000000001, 3.1000000000000001, 2.5600000000000001, 15.199999999999999, 116.0, 2.7000000000000002, 3.0299999999999998, 0.17000000000000001, 1.6599999999999999, 5.0999999999999996, 0.95999999999999996, 3.3599999999999999, 845.0, 1, 1],
    [12.6, 2.46, 2.2000000000000002, 18.5, 94.0, 1.6200000000000001, 0.66000000000000003, 0.63, 0.93999999999999995, 7.0999999999999996, 0.72999999999999998, 1.5800000000000001, 695.0, 3, 3],
    [11.960000000000001, 1.0900000000000001, 2.2999999999999998, 21.0, 101.0, 3.3799999999999999, 2.1400000000000001, 0.13, 1.6499999999999999, 3.21, 0.98999999999999999, 3.1299999999999999, 886.0, 2, 2],
    [12.25, 3.8799999999999999, 2.2000000000000002, 18.5, 112.0, 1.3799999999999999, 0.78000000000000003, 0.28999999999999998, 1.1399999999999999, 8.2100000000000009, 0.65000000000000002, 2.0, 855.0, 3, 3],
    [14.300000000000001, 1.9199999999999999, 2.7200000000000002, 20.0, 120.0, 2.7999999999999998, 3.1400000000000001, 0.33000000000000002, 1.97, 6.2000000000000002, 1.0700000000000001, 2.6499999999999999, 1280.0, 1, 1],
    [12.880000000000001, 2.9900000000000002, 2.3999999999999999, 20.0, 104.0, 1.3, 1.22, 0.23999999999999999, 0.82999999999999996, 5.4000000000000004, 0.73999999999999999, 1.4199999999999999, 530.0, 3, 3],
    [13.49, 3.5899999999999999, 2.1899999999999999, 19.5, 88.0, 1.6200000000000001, 0.47999999999999998, 0.57999999999999996, 0.88, 5.7000000000000002, 0.81000000000000005, 1.8200000000000001, 580.0, 3, 3],
    [13.56, 1.71, 2.3100000000000001, 16.199999999999999, 117.0, 3.1499999999999999, 3.29, 0.34000000000000002, 2.3399999999999999, 6.1299999999999999, 0.94999999999999996, 3.3799999999999999, 795.0, 1, 1],
    [14.34, 1.6799999999999999, 2.7000000000000002, 25.0, 98.0, 2.7999999999999998, 1.3100000000000001, 0.53000000000000003, 2.7000000000000002, 13.0, 0.56999999999999995, 1.96, 660.0, 3, 3],


  ],

  columns: ['Alcohol', 'Malic acid', 'Ash',
    'Alcalinity of ash', 'Magnesium', 'Total phenols',
    'Flavanoids', 'Nonflavanoid phenols', 'Proanthocyanins',
    'Color intensity', 'Hue', 'OD280/OD315 of diluted wines',
    'Proline', 'Class label', "Prediction"],

  /* kk: [
     [13.74, 1.6699999999999999, 2.25, 16.399999999999999, 118.0, 2.6000000000000001, 2.8999999999999999, 0.20999999999999999, 1.6200000000000001, 5.8499999999999996, 0.92000000000000004, 3.2000000000000002, 1060.0, 1, 2],
       [12.789999999999999, 2.6699999999999999, 2.48, 22.0, 112.0, 1.48, 1.3600000000000001, 0.23999999999999999, 1.26, 10.800000000000001, 0.47999999999999998, 1.47, 480.0, 3, 2],
       [12.369999999999999, 1.1299999999999999, 2.1600000000000001, 19.0, 87.0, 3.5, 3.1000000000000001, 0.19, 1.8700000000000001, 4.4500000000000002, 1.22, 2.8700000000000001, 420.0, 2, 2],
       [13.56, 1.73, 2.46, 20.5, 116.0, 2.96, 2.7799999999999998, 0.20000000000000001, 2.4500000000000002, 6.25, 0.97999999999999998, 3.0299999999999998, 1120.0, 1, 2],
       [13.050000000000001, 5.7999999999999998, 2.1299999999999999, 21.5, 86.0, 2.6200000000000001, 2.6499999999999999, 0.29999999999999999, 2.0099999999999998, 2.6000000000000001, 0.72999999999999998, 3.1000000000000001, 380.0, 2, 2],
       [11.56, 2.0499999999999998, 3.23, 28.5, 119.0, 3.1800000000000002, 5.0800000000000001, 0.46999999999999997, 1.8700000000000001, 6.0, 0.93000000000000005, 3.6899999999999999, 465.0, 2, 2],
       [14.06, 2.1499999999999999, 2.6099999999999999, 17.600000000000001, 121.0, 2.6000000000000001, 2.5099999999999998, 0.31, 1.25, 5.0499999999999998, 1.0600000000000001, 3.5800000000000001, 1295.0, 1, 2],
       [12.359999999999999, 3.8300000000000001, 2.3799999999999999, 21.0, 88.0, 2.2999999999999998, 0.92000000000000004, 0.5, 1.04, 7.6500000000000004, 0.56000000000000005, 1.5800000000000001, 520.0, 3, 3],
       [12.25, 1.73, 2.1200000000000001, 19.0, 80.0, 1.6499999999999999, 2.0299999999999998, 0.37, 1.6299999999999999, 3.3999999999999999, 1.0, 3.1699999999999999, 510.0, 2, 2],
       [12.08, 1.8300000000000001, 2.3199999999999998, 18.5, 81.0, 1.6000000000000001, 1.5, 0.52000000000000002, 1.6399999999999999, 2.3999999999999999, 1.0800000000000001, 2.27, 480.0, 2, 2],
       [13.359999999999999, 2.5600000000000001, 2.3500000000000001, 20.0, 89.0, 1.3999999999999999, 0.5, 0.37, 0.64000000000000001, 5.5999999999999996, 0.69999999999999996, 2.4700000000000002, 780.0, 3, 2],
       [13.880000000000001, 5.04, 2.23, 20.0, 80.0, 0.97999999999999998, 0.34000000000000002, 0.40000000000000002, 0.68000000000000005, 4.9000000000000004, 0.57999999999999996, 1.3300000000000001, 415.0, 3, 2],
       [14.199999999999999, 1.76, 2.4500000000000002, 15.199999999999999, 112.0, 3.27, 3.3900000000000001, 0.34000000000000002, 1.97, 6.75, 1.05, 2.8500000000000001, 1450.0, 1, 2],
       [12.369999999999999, 1.0700000000000001, 2.1000000000000001, 18.5, 88.0, 3.52, 3.75, 0.23999999999999999, 1.95, 4.5, 1.04, 2.77, 660.0, 2, 2],
       [13.58, 2.5800000000000001, 2.6899999999999999, 24.5, 105.0, 1.55, 0.83999999999999997, 0.39000000000000001, 1.54, 8.6600000000000001, 0.73999999999999999, 1.8, 750.0, 3, 2],
       [12.0, 0.92000000000000004, 2.0, 19.0, 86.0, 2.4199999999999999, 2.2599999999999998, 0.29999999999999999, 1.4299999999999999, 2.5, 1.3799999999999999, 3.1200000000000001, 278.0, 2, 2],
       [13.76, 1.53, 2.7000000000000002, 19.5, 132.0, 2.9500000000000002, 2.7400000000000002, 0.5, 1.3500000000000001, 5.4000000000000004, 1.25, 3.0, 1235.0, 1, 2],
       [14.19, 1.5900000000000001, 2.48, 16.5, 108.0, 3.2999999999999998, 3.9300000000000002, 0.32000000000000001, 1.8600000000000001, 8.6999999999999993, 1.23, 2.8199999999999998, 1680.0, 1, 2],
       [12.640000000000001, 1.3600000000000001, 2.02, 16.800000000000001, 100.0, 2.02, 1.4099999999999999, 0.53000000000000003, 0.62, 5.75, 0.97999999999999998, 1.5900000000000001, 450.0, 2, 2],
       [13.83, 1.6499999999999999, 2.6000000000000001, 17.199999999999999, 94.0, 2.4500000000000002, 2.9900000000000002, 0.22, 2.29, 5.5999999999999996, 1.24, 3.3700000000000001, 1265.0, 1, 2],
       [13.109999999999999, 1.01, 1.7, 15.0, 78.0, 2.98, 3.1800000000000002, 0.26000000000000001, 2.2799999999999998, 5.2999999999999998, 1.1200000000000001, 3.1800000000000002, 502.0, 2, 2],
       [13.050000000000001, 1.6499999999999999, 2.5499999999999998, 18.0, 98.0, 2.4500000000000002, 2.4300000000000002, 0.28999999999999998, 1.4399999999999999, 4.25, 1.1200000000000001, 2.5099999999999998, 1105.0, 1, 2],
       [13.24, 2.5899999999999999, 2.8700000000000001, 21.0, 118.0, 2.7999999999999998, 2.6899999999999999, 0.39000000000000001, 1.8200000000000001, 4.3200000000000003, 1.04, 2.9300000000000002, 735.0, 1, 2],
       [12.51, 1.73, 1.98, 20.5, 85.0, 2.2000000000000002, 1.9199999999999999, 0.32000000000000001, 1.48, 2.9399999999999999, 1.04, 3.5699999999999998, 672.0, 2, 2],
       [12.33, 1.1000000000000001, 2.2799999999999998, 16.0, 101.0, 2.0499999999999998, 1.0900000000000001, 0.63, 0.40999999999999998, 3.27, 1.25, 1.6699999999999999, 680.0, 2, 2],
       [12.52, 2.4300000000000002, 2.1699999999999999, 21.0, 88.0, 2.5499999999999998, 2.27, 0.26000000000000001, 1.22, 2.0, 0.90000000000000002, 2.7799999999999998, 325.0, 2, 2],
       [12.43, 1.53, 2.29, 21.5, 86.0, 2.7400000000000002, 3.1499999999999999, 0.39000000000000001, 1.77, 3.9399999999999999, 0.68999999999999995, 2.8399999999999999, 352.0, 2, 2],
       [12.16, 1.6100000000000001, 2.3100000000000001, 22.800000000000001, 90.0, 1.78, 1.6899999999999999, 0.42999999999999999, 1.5600000000000001, 2.4500000000000002, 1.3300000000000001, 2.2599999999999998, 495.0, 2, 2],
       [11.76, 2.6800000000000002, 2.9199999999999999, 20.0, 103.0, 1.75, 2.0299999999999998, 0.59999999999999998, 1.05, 3.7999999999999998, 1.23, 2.5, 607.0, 2, 2],
       [13.779999999999999, 2.7599999999999998, 2.2999999999999998, 22.0, 90.0, 1.3500000000000001, 0.68000000000000005, 0.40999999999999998, 1.03, 9.5800000000000001, 0.69999999999999996, 1.6799999999999999, 615.0, 3, 2],
       [13.390000000000001, 1.77, 2.6200000000000001, 16.100000000000001, 93.0, 2.8500000000000001, 2.9399999999999999, 0.34000000000000002, 1.45, 4.7999999999999998, 0.92000000000000004, 3.2200000000000002, 1195.0, 1, 2],
       [14.220000000000001, 1.7, 2.2999999999999998, 16.300000000000001, 118.0, 3.2000000000000002, 3.0, 0.26000000000000001, 2.0299999999999998, 6.3799999999999999, 0.93999999999999995, 3.3100000000000001, 970.0, 1, 2],
       [12.039999999999999, 4.2999999999999998, 2.3799999999999999, 22.0, 80.0, 2.1000000000000001, 1.75, 0.41999999999999998, 1.3500000000000001, 2.6000000000000001, 0.79000000000000004, 2.5699999999999998, 580.0, 2, 2],
       [14.210000000000001, 4.04, 2.4399999999999999, 18.899999999999999, 111.0, 2.8500000000000001, 2.6499999999999999, 0.29999999999999999, 1.25, 5.2400000000000002, 0.87, 3.3300000000000001, 1080.0, 1, 2],
       [14.83, 1.6399999999999999, 2.1699999999999999, 14.0, 97.0, 2.7999999999999998, 2.98, 0.28999999999999998, 1.98, 5.2000000000000002, 1.0800000000000001, 2.8500000000000001, 1045.0, 1, 1],
       [13.050000000000001, 1.77, 2.1000000000000001, 17.0, 107.0, 3.0, 3.0, 0.28000000000000003, 2.0299999999999998, 5.04, 0.88, 3.3500000000000001, 885.0, 1, 2],
       [13.69, 3.2599999999999998, 2.54, 20.0, 107.0, 1.8300000000000001, 0.56000000000000005, 0.5, 0.80000000000000004, 5.8799999999999999, 0.95999999999999996, 1.8200000000000001, 680.0, 3, 2],
       [12.69, 1.53, 2.2599999999999998, 20.699999999999999, 80.0, 1.3799999999999999, 1.46, 0.57999999999999996, 1.6200000000000001, 3.0499999999999998, 0.95999999999999996, 2.0600000000000001, 495.0, 2, 2],
       [11.619999999999999, 1.99, 2.2799999999999998, 18.0, 98.0, 3.02, 2.2599999999999998, 0.17000000000000001, 1.3500000000000001, 3.25, 1.1599999999999999, 2.96, 345.0, 2, 2],
       [13.4, 3.9100000000000001, 2.48, 23.0, 102.0, 1.8, 0.75, 0.42999999999999999, 1.4099999999999999, 7.2999999999999998, 0.69999999999999996, 1.5600000000000001, 750.0, 3, 2],
       [13.5, 1.8100000000000001, 2.6099999999999999, 20.0, 96.0, 2.5299999999999998, 2.6099999999999999, 0.28000000000000003, 1.6599999999999999, 3.52, 1.1200000000000001, 3.8199999999999998, 845.0, 1, 2],
       [13.73, 1.5, 2.7000000000000002, 22.5, 101.0, 3.0, 3.25, 0.28999999999999998, 2.3799999999999999, 5.7000000000000002, 1.1899999999999999, 2.71, 1285.0, 1, 2],
       [12.289999999999999, 2.8300000000000001, 2.2200000000000002, 18.0, 88.0, 2.4500000000000002, 2.25, 0.25, 1.99, 2.1499999999999999, 1.1499999999999999, 3.2999999999999998, 290.0, 2, 2],
       [12.6, 1.3400000000000001, 1.8999999999999999, 18.5, 88.0, 1.45, 1.3600000000000001, 0.28999999999999998, 1.3500000000000001, 2.4500000000000002, 1.04, 2.77, 562.0, 2, 2],
       [11.41, 0.73999999999999999, 2.5, 21.0, 88.0, 2.48, 2.0099999999999998, 0.41999999999999998, 1.4399999999999999, 3.0800000000000001, 1.1000000000000001, 2.3100000000000001, 434.0, 2, 2],
       [13.640000000000001, 3.1000000000000001, 2.5600000000000001, 15.199999999999999, 116.0, 2.7000000000000002, 3.0299999999999998, 0.17000000000000001, 1.6599999999999999, 5.0999999999999996, 0.95999999999999996, 3.3599999999999999, 845.0, 1, 2],
       [12.6, 2.46, 2.2000000000000002, 18.5, 94.0, 1.6200000000000001, 0.66000000000000003, 0.63, 0.93999999999999995, 7.0999999999999996, 0.72999999999999998, 1.5800000000000001, 695.0, 3, 2],
       [11.960000000000001, 1.0900000000000001, 2.2999999999999998, 21.0, 101.0, 3.3799999999999999, 2.1400000000000001, 0.13, 1.6499999999999999, 3.21, 0.98999999999999999, 3.1299999999999999, 886.0, 2, 2],
       [12.25, 3.8799999999999999, 2.2000000000000002, 18.5, 112.0, 1.3799999999999999, 0.78000000000000003, 0.28999999999999998, 1.1399999999999999, 8.2100000000000009, 0.65000000000000002, 2.0, 855.0, 3, 2],
       [14.300000000000001, 1.9199999999999999, 2.7200000000000002, 20.0, 120.0, 2.7999999999999998, 3.1400000000000001, 0.33000000000000002, 1.97, 6.2000000000000002, 1.0700000000000001, 2.6499999999999999, 1280.0, 1, 2],
       [12.880000000000001, 2.9900000000000002, 2.3999999999999999, 20.0, 104.0, 1.3, 1.22, 0.23999999999999999, 0.82999999999999996, 5.4000000000000004, 0.73999999999999999, 1.4199999999999999, 530.0, 3, 2],
       [13.49, 3.5899999999999999, 2.1899999999999999, 19.5, 88.0, 1.6200000000000001, 0.47999999999999998, 0.57999999999999996, 0.88, 5.7000000000000002, 0.81000000000000005, 1.8200000000000001, 580.0, 3, 2],
       [13.56, 1.71, 2.3100000000000001, 16.199999999999999, 117.0, 3.1499999999999999, 3.29, 0.34000000000000002, 2.3399999999999999, 6.1299999999999999, 0.94999999999999996, 3.3799999999999999, 795.0, 1, 2],
       [14.34, 1.6799999999999999, 2.7000000000000002, 25.0, 98.0, 2.7999999999999998, 1.3100000000000001, 0.53000000000000003, 2.7000000000000002, 13.0, 0.56999999999999995, 1.96, 660.0, 3, 2],

   ],*/
  featureImportance: [
    ["Color intensity", 0.182483],
    ["Proline", 0.158610],
    ["Flavanoids", 0.150948],
    ["OD280/OD315 of diluted wines", 0.131987],
    ["Alcohol", 0.106589],
    ["Hue", 0.078243],
    ["Total phenols", 0.060718],
    ["Alcalinity of ash", 0.032033],
    ["Malic acid", 0.025400],
    ["Proanthocyanins", 0.022351],
    ["Magnesium", 0.022078],
    ["Nonflavanoid phenols", 0.014645],
    ["Ash", 0.013916],
  ],
}


@Injectable()
export class WineService {

  public redWine = redWine;
  public classifiedWine = classifiedWine;

  constructor() {
  }


  public getWineQuality(wine: string = 'white'): WINE {


    let WINE;

    if (wine === 'white') {

      WINE = whiteWine;
    } else if (wine === 'red') {

      WINE = redWine;
    } else if (wine === 'classify') {

      WINE = classifiedWine;
    }


    return WINE;


  }


}