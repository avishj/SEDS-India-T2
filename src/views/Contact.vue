<template>
  <form class="container-fluid">
    <br />
    <p class="h3 text-center font-bold mt-1 mb-4">Write to us</p>
    <b-row>
      <b-col md="6" offset-md="3">
        <div class="grey-text">
          <mdb-input
            label="Your name"
            icon="user"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            label="Your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <mdb-input
            label="Subject"
            icon="tag"
            group
            type="text"
            validate
            error="wrong"
            success="right"
          />
          <mdb-textarea :rows="2" label="Your message" icon="pencil" />
        </div>
        <div class="text-center mb-2">
          <mdb-btn color="blue">
            Submit
            <mdb-icon far icon="paper-plane" class="ml-1" />
          </mdb-btn>
        </div>
      </b-col>
    </b-row>
  </form>
</template>

<script>
import { mdbInput, mdbBtn, mdbTextarea } from "mdbvue";
export default {
  name: "Basic",
  components: {
    mdbInput,
    mdbBtn,
    mdbTextarea
  }
};
</script>