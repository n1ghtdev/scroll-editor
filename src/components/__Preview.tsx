/** @jsx jsx */
import React from "react";
import { Input } from "antd";
import { css, jsx } from "@emotion/core";

import { generateScrollbarStyles } from "../utils/generateScrollbarStyles";

const Preview = ({ options }: { options: any }) => {
  const [styles, setStyles] = React.useState(generateScrollbarStyles(options));

  React.useEffect(() => {
    setStyles(generateScrollbarStyles(options));
  }, [options]);

  return (
    <React.Fragment>
      <div
        css={css`
          height: 500px;
          width: 100%;
          background-color: #e3e8f1;
          overflow-y: scroll;
          line-height: 1.7;
          padding: 20px;

          ${styles}
        `}
      >
        Dolor voluptatem est unde iure temporibus Debitis veritatis magnam minus
        tempora voluptatum quas Et sequi ad alias exercitationem sequi corrupti
        Voluptatem ullam architecto saepe doloribus rerum. Quos ipsam aliquid
        dignissimos sapiente iure aspernatur. Maiores distinctio voluptate
        consectetur autem sapiente. In laborum aperiam veritatis repudiandae
        nemo. Impedit aspernatur dolorum praesentium earum distinctio? Accusamus
        modi reprehenderit repellendus eligendi magnam. Deserunt cumque veniam
        corrupti nulla accusantium ut Illo ut dolore perferendis architecto
        doloremque fugiat Quia nesciunt repudiandae in molestias vel veritatis?
        Eum dolores ratione enim error beatae, repellendus Doloremque nisi illo
        minima vel rem aperiam Architecto numquam accusamus accusantium officiis
        expedita! Nisi optio odit eligendi nisi nisi Omnis mollitia quaerat ut
        eligendi libero nulla. Sapiente quo quia sequi vero neque? Ut sint sit
        rem facilis ab soluta. Quis est autem fugiat fugit voluptates Dolorem
        non animi placeat vero soluta Architecto sint deleniti voluptas fugiat
        soluta sapiente Itaque quidem soluta reiciendis quia nisi Fuga numquam
        explicabo cumque molestiae magni Eos alias fuga voluptas provident
        excepturi In ea ipsum dolores dolore veniam A adipisci totam libero quo
        ipsa voluptates earum? Consequatur consequuntur excepturi sapiente eius
        quasi Error impedit laborum maxime quidem saepe Iure quasi corrupti
        maiores exercitationem nemo Harum reiciendis iure provident voluptate
        error voluptatem! Odio cum mollitia ipsa commodi delectus. Ratione quos
        delectus nobis numquam molestiae? Necessitatibus ab fugit sequi maiores
        inventore. Temporibus quia culpa nam alias sed. Accusamus incidunt
        itaque ducimus dolorem eligendi corrupti ex sed Assumenda accusantium
        illum velit quos a Quidem vitae voluptas placeat assumenda ratione
        Repudiandae sapiente suscipit dignissimos repellat quo beatae? Dicta
        blanditiis provident molestias odit architecto. Corporis quidem nemo
        optio praesentium itaque non quaerat error corrupti Placeat rem iure
        eius magnam tenetur Atque est unde odio rem doloribus? Maiores eaque
        ullam amet ut nostrum Consequuntur pariatur ipsam ratione impedit quod?
        Et ratione dicta inventore aliquam incidunt! Atque quis!
      </div>
      <Input.TextArea
        css={css`
          margin-top: 22px;
        `}
        rows={5}
        value={styles?.join("")}
      />
    </React.Fragment>
  );
};

export default Preview;
