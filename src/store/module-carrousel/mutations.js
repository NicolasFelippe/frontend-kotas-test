export const nextIndex = (state) => {
  if (state.currentIndex < state.cards.length - 1) { state.currentIndex += 1 }
}

export const prevIndex = (state) => {
  if (state.currentIndex > 0) { state.currentIndex -= 1 }
}
