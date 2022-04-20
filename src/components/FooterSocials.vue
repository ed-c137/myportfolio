<template>
  <div class="social-links">
      <a href="mailto:edrick613@gmail.com">
        <fa icon="envelope" />
      </a>
        <a href="https://github.com/ed-c137" target="_blank">
             <fa :icon="['fab', 'github']" />
        </a>
        <a href="https://linkedin.com/in/edrickoliveira" target="_blank">
             <fa :icon="['fab', 'linkedin']" />
        </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "@/assets/styles/function";
.social-links{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 20%;
    font-size: 1.3rem;

  a{    
      text-decoration: none;
      color:var(--color-text-light);
      &:hover{
          color: var(--color-primary);
      }
  }
  @include for-phone-only {
    width: 65%;
    font-size: 1.2rem;
  }
}
</style>