import React from "react";
import PropTypes from "prop-types";

import { AvatarBlock, Card, Counter, Image, Icon, Stack } from "../../index";

function Shot({ element }) {
  const Element = element
  return (
  <Element>

    <Card>
    <Image src="https://cdn.dribbble.com/users/927565/screenshots/3929733/roadshow-dribbble.png" alt="hey" />

    <AvatarBlock
      name="Guille Mesyngier"
      url="https://dribbble.com/gmesyngier"
      avatar="https://cdn.dribbble.com/users/927565/avatars/normal/871881bb1267479631c106f2985c93b9.jpg"
      label="pro"
    >
        
    </AvatarBlock>
      </Card>
  </Element>
  )
}

Shot.defaultProps = {
  element: 'div'
};

Shot.propTypes = {
  element: PropTypes.string
};

export { Shot };
