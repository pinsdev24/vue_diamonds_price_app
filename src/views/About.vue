<template>
  <div class="about">
    <h1 class="subheading grey--text">
      About App
    </h1>
    <v-container class="my-5">
      <v-row align="center" justify="center">
        <v-col md="6" cols="12">
          <img src="../../public/img/1.jpg" width="500" alt="1" />
        </v-col>
        <v-col md="6" cols="12">
          <p>
            I have considered the classic Diamonds dataset which contains the
            prices and other attributes of almost 54,000 diamonds and this
            dataset is hosted on <a href="https://kaggle.com">Kaggle</a>. The
            dataset contains 53940 rows and 10 variables. Let’s have a look into
            the variables & their definitions.
          </p>
          <p></p>
          <ul>
            <li><strong>Price</strong> is in US dollars</li>
            <li><strong>Carat</strong> weight of the diamond</li>
            <li>
              <strong>Cut</strong> quality of the cut (Fair, Good, Very Good,
              Premium, Ideal)
            </li>
            <li>
              <strong>color</strong> diamond colour, from J (worst) to D (best)
            </li>
            <li>
              <strong>clarity</strong> a measurement of how clear the diamond is
              (I1 (worst), SI2, SI1, VS2, VS1, VVS2, VVS1, IF (best))
            </li>
            <li><strong>x</strong> length in mm</li>
            <li><strong>y</strong> width in mm</li>
            <li><strong>z</strong> depth in m</li>
            <li><strong>depth</strong>: The height of a diamond</li>
            <li>
              <strong>table</strong>: The width of the diamond’s table expressed
              as a percentage of its average diameter
            </li>
          </ul>
          <p>
            So, we Used scikit-learn, XGBRegressor to build our Machine Learning
            model with RMSE = 515 and MSE = 265437. you can show the jupyter
            notebook
            <a
              href="https://github.com/pinsdev24/diamond-price-prediction-notebook"
              >here</a
            >
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script></script>
<style></style>
