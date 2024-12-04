# Tailwind CSS Gradient Bug

This repository demonstrates a common issue encountered when using Tailwind CSS gradients. The gradient doesn't apply as expected, resulting in a solid color instead of a smooth color transition.

## Problem
The gradient specified using `bg-gradient-to-r from-blue-500 to-purple-500` doesn't produce the intended gradient effect; it shows a uniform blue color.

## Solution
This issue arises because of missing or incorrect configuration. The solution involves ensuring that Tailwind CSS is correctly configured and that the gradient configuration is valid within the Tailwind config file (tailwind.config.js).  Also, ensure that the correct CSS classes are being used.