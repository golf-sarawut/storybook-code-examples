---
marp: true
---

# Storybook Knowledge Sharing - Code examples

---

# Agenda

- Run storybook
- Basic configuration on stories path.
- Add a component to a storybook
- Add document automatically
- Add arguments to component
- Add mock action handler to arguments

---

# Exercise - Run storybook

![height:400px](image-3.png)

`npm run storybook`

---

# Stoybook configuration

---

# .storybook/main.ts

![alt text](image.png)

---

# Exercise - Storybook configuration for exercises folder

Add *.stories in `exercises` folder in config file

![alt text](image-4.png)

---

# Storybook Meta and Story

![alt text height:600px](image-7.png)

---

# Add document automatically with autodoc

```
tags: ['autodocs']
```
---

# Add autodoc

![alt text](image-8.png)

---



# Note: Inline comment will not work as JSDoc

![alt text](image-6.png)

---

# Try to create a story for ToggleSwitch


---

# Study from examples in ./story folder