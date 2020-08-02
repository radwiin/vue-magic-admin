/**
 * map遍历树形结构数据(自上向下)
 * @param {Object[]} tree
 * @param {Function} method
 */
export function mapTree(tree, method) {
  return tree.map(item => {
    item = method(item)
    if (item && item.children && item.children.length > 0) {
      item.children = mapTree(item.children, method)
    }
    return item
  })
}

/* methods take from vuesax */
export function isColor(color) {
  const vsColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'dark',
    'light',
    'warn',
    // social colors
    'facebook',
    'twitter',
    'youtube',
    'pinterest',
    'linkedin',
    'snapchat',
    'whatsapp',
    'tumblr',
    'reddit',
    'spotify',
    'amazon',
    'medium',
    'vimeo',
    'skype',
    'dribbble',
    'slack',
    'yahoo',
    'twitch',
    'discord',
    'telegram',
    'google-plus',
    'messenger'
  ]
  return vsColors.includes(color)
}

export function setVar(propertyName, value, el) {
  if (!el) {
    document.documentElement.style.setProperty(`--vs-${propertyName}`, value)
  } else {
    if (el.nodeName !== '#comment') {
      el.style.setProperty(`--vs-${propertyName}`, value)
    }
  }
}

export function setColor(colorName, color, el, addClass) {
  function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b
    })

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          // tslint:disable-next-line:object-literal-sort-keys
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null
  }

  const isRGB = /^(rgb|rgba)/.test(color)
  const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(
    color
  )
  const isHEX = /^(#)/.test(color)
  let newColor

  if (color == 'dark' && el) {
    el.classList.add('vs-component-dark')
  }

  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',')
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
    setVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else if (isHEX) {
    const rgb = hexToRgb(color)
    newColor = `${rgb.r},${rgb.g},${rgb.b}`
    setVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else if (isColor(color)) {
    const style = getComputedStyle(document.body)
    newColor = style.getPropertyValue('--vs-' + color)
    setVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else if (isRGBNumbers) {
    setVar(colorName, color, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else {
    //     consolee.warn({
    //       el,
    //       link: 'https://lusaxweb.github.io/vuesax/',
    //       text: `• Component: ${el.__vue__.$vnode.componentOptions.tag}
    // • Warn info: El formato de la propiedad color es incorrecto
    // • Prop: color
    // • value: ${color}
    // • Valores Permitidos: (RGB, HEX, RGB Numbers, Vuesax Colors)
    // • Example: color="#000" or color="rgb(255,255,255)"`,
    //       title: 'VUESAX'
    //     })
  }
}
/* methods take from vuesax */
