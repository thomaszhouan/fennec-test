---
layout    : project
page_css  : /assets/css/wide-content.css
title     : {{ site.title }}
toc       : true
toc_sticky: true
toc_label : Outline
toc_icon  : list-ul
header:
    overlay_filter: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))
    overlay_image: /assets/images/micrograph.jpg
    caption: Micrograph of the FENNEC SoC
    actions:
        - label: ISSCC'25
          url  : https://ieeexplore.ieee.org/abstract/document/10904788
        - label: JSSC'25
          url  : https://ieeexplore.ieee.org/abstract/document/11159176
        - label: Code
          url  : https://github.com/thomaszhouan/fennec-test
        - label: Demo
          url  : https://www.youtube.com/watch?v=GLxwnimXB2U
        - label: Cite
          url  : "#citation"
excerpt: Ultra-low-power bionic speech processing SoC for extreme edge
---

Sheng Zhou<sup>[1][affi1],\*</sup>, Zixiao Li<sup>[1][affi1],\*</sup>, Longbiao Cheng<sup>[1][affi1]</sup>, Jérôme Hadorn<sup>[1][affi1]</sup>,<br/>
Chang Gao<sup>[3][affi3]</sup>, Qinyu Chen<sup>[4][affi4]</sup>, Tobi Delbruck<sup>[1][affi1]</sup>, Kwantae Kim<sup>[2][affi2]</sup>, Shih-Chii Liu<sup>[1][affi1]</sup>
{: .author-list}

[1][affi1] Institute of Neuroinformatics, University of Zürich and ETH Zürich, Zürich, Switzerland<br/>
[2][affi2] Department of Electronics and Nanoengineering, School of Electrical Engineering, Aalto University, Espoo, Finland<br/>
[3][affi3] Department of Microelectronics, Delft University of Technology, Delft, The Netherlands<br/>
[4][affi4] Leiden Institute of Advanced Computer Science (LIACS), Leiden University, Leiden, The Netherlands<br/>
\* Equal contribution<br/>
{: .affiliation-list}
---

# :dart: Introducing {{ site.title }}
{{ site.title }} is an **ultra-low-power** bionic system-on-chip (SoC) that
enables **always-on** voice user interface for extreme edge devices,
such as earbuds, smart rings and wireless sensor nodes.
With a cochlea-inspired analog frontend and a brain-inspired digital backend,
{{ site.title }} is capable of extracting acoustic features from analog microphone signals
while performing real-time continuous speech classification,
all within a tight power envelope of <10μW and a tiny footprint of 3mm<sup>2</sup>.
This post summarizes the design of {{ site.title }},
which has been published in the top integrated circuit design conference [ISSCC][ISSCC] and journal [JSSC][JSSC].

<i class="fas fa-circle-info"></i>
**{{ site.title }}** stands for **F**eature **E**xtractor with **N**eural **N**etwork for extreme **E**dge **C**omprehension.
{{ site.title | capitalize }} is also the name of a small fox living in the desert of North Africa.
Its most distinctive feature is its unusually large ears to listen for underground prey and to dissipate heat, as shown in the [figure](#fig-fox) below.
{: .notice--info}

{: .image-with-caption #fig-fox}
![chip-logo](/assets/images/fennec.png){: width="40%"}
A {{ site.title | downcase }} fox.

---
# Background
Voice user interface (VUI) provides a hands-free user interaction for Internet of Things (IoT) nodes and wearable devices.
However, the limited system power budget of these battery-powered tiny edge devices poses a severe challenge,
leading to growing research interest in developing
application-specific integrated circuits (ASICs) for on-device voice interface.
Prior ASIC designs for ultra-low-power speech processing have been focused on voice activity detection (VAD) or keyword spotting (KWS),
which involve context length of tens to hundreds of milliseconds,
and distinguish between a handful of output classes.
{{ site.title }} addresses a more challenging task known as spoken language understanding (SLU),
requiring the processing of *sentence-level context* of several seconds and classifying *more than 30 classes*, as shown in the [figure](#fig-task) below.

{: .image-with-caption #fig-task}
![chip-logo](/assets/images/1_1_Task.png){: width="70%"}
Different audio classification tasks for voice interface on the extreme edge.

An end-to-end SLU system infers user intent directly from continuous spoken sentences.
The table below shows some example sentences and their corresponding intents from the [Fluent Speech Commands Dataset][FSCD] (FSCD), a corpus for evaluating SLU systems.

| Sentence | Intent |
|:---|:---|{% for item in site.data.fscd_samples %}
| {{ item.sentence }} |    **Action:**   {{ item.action   }} |
| ^^                  | ^^ **Object:**   {{ item.object   }} |
| ^^                  | ^^ **Location:** {{ item.location }} |{% endfor %}

{:color-style: style="background: black;"}
{:color-style: style="color: white;"}
{:text-style: style="font-weight: 800; text-decoration: underline;"}

|:             Here's an Inline Attribute Lists example                :||||
| ------- | ------------------ | -------------------- | ------------------ |
|:       :|:  <div style="color: red; font-weight: bold"> &lt; Normal HTML Block > </div> :|||
| ^^      |   Red    {: .cls style="background: orange" }                |||
| ^^ IALs |   Green  {: #id style="background: green; color: white" }    |||
| ^^      |   Blue   {: style="background: blue; color: white" }         |||
| ^^      |   Black  {: color-style text-style }                         |||

---
# Our design
It integrates a cochlea-inspired wide-dynamic-range analog frontend for feature extraction and a brain-inspired temporal-sparsity-aware digital backend for streaming classification.
wide dynamic range (DR) frontend that directly converts the incoming acoustic waveform into spectrogram-like features using a cochlea-inspired analog feature extractor
10μW

## Automatic gain control (AGC)
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

## Hardware-aware training (HAT)
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

## Temporal sparsity (Δ-GRU)
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

---
# Comparison with SOTA
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

---
# Conclusion
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.

{: #citation}
# :books: Citation
If you find our work useful, please consider citing our papers.

**Conference publication in ISSCC 2025**
```bibtex
@inproceedings{2025-ISSCC-Zhou-SLU,
    author={Zhou, Sheng and Li, Zixiao and Delbruck, Tobi and Kim, Kwantae and Liu, Shih-Chii},
    booktitle={2025 IEEE International Solid-State Circuits Conference (ISSCC)},
    title={An 8.62{μW} {75dB-DR\textsubscript{SoC}} End-to-End Spoken-Language-Understanding {SoC} With Channel-Level {AGC} and Temporal-Sparsity-Aware Streaming-Mode {RNN}},
    year={2025},
    volume={68},
    number={},
    pages={238-240},
    doi={10.1109/ISSCC49661.2025.10904788}
}
```

**Invited journal extension in JSSC 2025**
```bibtex
@article{2025-JSSC-Zhou-SLU,
    author={Zhou, Sheng and Li, Zixiao and Cheng, Longbiao and Hadorn, Jérôme and Gao, Chang and Chen, Qinyu and Delbruck, Tobi and Kim, Kwantae and Liu, Shih-Chii},
    journal={IEEE Journal of Solid-State Circuits},
    title={An {8.62-μW} {75-dB} {DR\textsubscript{SoC}} Fully Integrated {SoC} for Spoken Language Understanding},
    year={2025},
    volume={},
    number={},
    pages={1-16},
    doi={10.1109/JSSC.2025.3602936}
}
```

[ISSCC]: https://ieeexplore.ieee.org/abstract/document/10904788
[JSSC]:  https://ieeexplore.ieee.org/abstract/document/11159176
[affi1]: https://www.ini.uzh.ch/en.html
[affi2]: https://www.aalto.fi/en/department-of-electronics-and-nanoengineering
[affi3]: https://microelectronics.tudelft.nl/
[affi4]: https://liacs.leidenuniv.nl/
[FSCD]: https://huggingface.co/speechbrain/slu-direct-fluent-speech-commands-librispeech-asr