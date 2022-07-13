import useEventsBus from '@/plugins/event-bus';

const trackMixin = {
  methods: {
    selectedTrack() {
      if (!this.track.preview_url) {
        return;
      }

      this.$emit('select', this.track.id);

      const { emit } = useEventsBus();
      emit('set-track', this.track);
    },
  },
};

export default trackMixin;
