// binding:
// name：指令名，不包括 v- 前缀。
// value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
// oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
// expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
// arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
// modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

export default {
  bind(el, binding, vnode) {
    const mask = document.createElement('div')

    mask.style.backgroundColor = 'smoke'
    mask.style.display = binding.value ? 'block' : 'none'
    ;['top', 'left'].forEach((property) => {
      const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
      mask.style[property] =
        el.getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] +
        'px'
    })
    ;['height', 'width'].forEach((property) => {
      mask.style[property] = el.getBoundingClientRect()[property] + 'px'
    })

    // 插入节点
    el.parentNode.appendChild(mask)

    el.mask = mask
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      el.mask.style.display = binding.value ? 'block' : 'none'
    }
  }
}
