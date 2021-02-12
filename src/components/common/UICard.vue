<template>
  <div class="card">
    <figure>
      <slot name="image"></slot>
    </figure>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui-card",
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 400px;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px #e6e8eb;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card:hover {
  box-shadow: 0 10px 20px #c5ccd6;
  transform: translateY(-10px);
}

.card figure img {
  width: 100%;
  padding: 10px 5px;
}

.card .card-body {
  flex-grow: 1;
  padding: 20px;
}

.card .card-body h3 {
  margin-bottom: 10px;
}

.card .card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #c5ccd6;
  padding: 20px;
}

.card .card-footer .price {
  color: rgb(26, 92, 255);
  font-weight: 700;
}
</style>
