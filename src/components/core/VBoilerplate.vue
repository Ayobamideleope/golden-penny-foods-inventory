<script>
export default {
  name: 'VBoilerplate',
  functional: true,

  render(h, { data, props, children }) {
    return h(
      'v-skeleton-loader',
      {
        ...data,
        props: {
          boilerplate: true,
          elevation: 2,
          ...props
        }
      },
      children
    );
  }
};
</script>
