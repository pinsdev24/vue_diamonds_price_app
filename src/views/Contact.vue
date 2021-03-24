<template>
  <div>
    <h1>Contact</h1>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        class="form-control"
        placeholder="your name"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        v-model="email"
        class="form-control"
        placeholder="Your Email"
      />
    </div>
    <button class="btn btn-primary" @click="submit">Contact Us</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: ""
    };
  },
  methods: {
    submit() {
      alert(`${this.name + " " + this.email}`);
    }
  }
};
</script>

<style lang="css">
.form-control {
  width: 250px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid;
}
.form-control:focus {
  border-color: #1aef;
}
.form-group {
  margin: 5px 5px;
}
.btn {
  position: center;
  width: 250px;
  height: 30px;
  color: white;
  border-radius: 4px;
  border: 1px solid;
  margin: center;
}
.btn-primary {
  background-color: #1aef;
}
.btn-primary:hover {
  background-color: #11ad;
}
</style>
