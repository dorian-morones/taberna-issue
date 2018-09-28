## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/dorian-morones/taberna-issue/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Situation
P0 uses the bathroom for longer periods of time, and P1 drinks faster.
If turn=0, P0 can useBathroom(). Then, after a long period of time, he goes out to update turn=1, and keep drink()-ing.
Now, P1 can useBathroom(), then goes out to update turn=0 and drink() all in one-shot. Next time he tries to useBathroom() he can’t since turn=0.
This means, P1 needs to wait until P0 have to useBathroom() again, wait for a long period of time and finally, once turn=1, be able to useBathroom().


[Link](https://dorian-morones.github.io/taberna-issue/)
```


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/dorian-morones/taberna-issue/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

