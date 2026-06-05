// 画廊数据配置 - 所有画作分类、标题与互动叙述
const galleryData = {
  categories: [
    {
      id: 'painting',
      name: '绘画',
      nameEn: 'Painting',
      description: '以笔触与色彩构筑的视觉世界，每一幅都是心灵与画布的对话',
      cover: '/artworks/绘画/87954120296206094.png',
      artworks: [
        {
          id: 'p1',
          title: '流光',
          filename: '/artworks/绘画/156180657590425513.jpg',
          year: '2024',
          medium: '纸本',
          description: '光影在时间中流淌，凝固成永恒的瞬间。画面中微妙的色调变化，仿佛黎明前最后一刻的天际，在静谧中蕴含着即将到来的光芒。',
          narrative: '当第一缕光穿过云层，世界便不再沉默。这幅作品捕捉了那个转瞬即逝的时刻——当黑暗与光明交汇，一切都在流光中苏醒。'
        },
        {
          id: 'p2',
          title: '幽径',
          filename: '/artworks/绘画/288836014370396868.png',
          year: '2024',
          medium: '纸本',
          description: '一条隐于林间的小径，通向未知的深处。浓淡相宜的笔触营造出幽深的意境。',
          narrative: '每一条幽径都通向一个秘密。当你踏上这条路，周围的声响渐渐远去，只剩下脚步与心跳的共鸣。前方是什么？唯有走下去才能知晓。'
        },
        {
          id: 'p3',
          title: '山语',
          filename: '/artworks/绘画/440627487086911683.png',
          year: '2024',
          medium: '纸本',
          description: '山峦低语，云雾缭绕间传递着亘古的信息。层叠的山影构成深邃的空间感。',
          narrative: '山有千言万语，却从不轻易诉说。唯有在风雨过后，当云雾散开的那一刻，你才能读懂它沉默中的智慧。'
        },
        {
          id: 'p4',
          title: '暮色',
          filename: '/artworks/绘画/446598776238622882.png',
          year: '2024',
          medium: '纸本',
          description: '黄昏时分的温柔与哀愁，天际线上的最后一抹暖色渐渐消融于夜色之中。',
          narrative: '暮色是一天中最诚实的时刻。当白日的喧嚣退去，留下的只有天空真实的颜色——那是时间在画布上留下的自画像。'
        },
        {
          id: 'p5',
          title: '远山',
          filename: '/artworks/绘画/723955534433631621.jpg',
          year: '2024',
          medium: '纸本',
          description: '远山如黛，近水含烟。简洁的构图传达出东方山水的意境之美。',
          narrative: '远山永远在那里，不近不远。它是一种承诺，也是一种等待。当你望向远山，远山也在望着你——这是观者与风景之间永恒的默契。'
        },
        {
          id: 'p6',
          title: '浮影',
          filename: '/artworks/绘画/736250096780094139.png',
          year: '2024',
          medium: '纸本',
          description: '光影浮动，虚实相生。模糊的边界中蕴含着丰富的视觉层次。',
          narrative: '什么是真实的？是树，还是水中树的倒影？浮影提醒我们，所见未必是所得，而最美的往往存在于真实与虚幻之间。'
        },
        {
          id: 'p7',
          title: '墨韵',
          filename: '/artworks/绘画/86724943490038694.png',
          year: '2024',
          medium: '纸本',
          description: '墨色的韵律在纸上流淌，浓淡干湿间展现出东方美学的精髓。',
          narrative: '墨有五色，一笔之中便可包含万千世界。这不是技巧，而是呼吸——当笔与墨合二为一，纸上便有了生命。'
        },
        {
          id: 'p8',
          title: '清寂',
          filename: '/artworks/绘画/87954120296206094.png',
          year: '2024',
          medium: '纸本',
          description: '清冷而寂静的画面，留白处胜过千言万语。极简的笔触传达深远的意境。',
          narrative: '在喧嚣的世界中，清寂是一种奢侈。这幅画邀请你停下脚步，在空白处找到属于自己的宁静。有时候，不画，才是最有力量的表达。'
        },
        {
          id: 'p9',
          title: '层叠',
          filename: '/artworks/绘画/图层 .png',
          year: '2024',
          medium: '纸本',
          description: '层层叠叠的视觉构造，如同记忆的沉积，每一层都承载着不同的故事。',
          narrative: '时间是一层一层的，记忆也是。当你凝视这幅画，你看到的不仅是色彩的重叠，更是时间的考古——每一层都是曾经活过的证明。'
        }
      ]
    },
    {
      id: 'printmaking',
      name: '版画',
      nameEn: 'Printmaking',
      description: '铜版与木版的刻痕之间，是力量与细腻的交织，每一道印迹都是不可复制的存在',
      cover: '/artworks/版画/552447023085430662.png',
      artworks: [
        {
          id: 'pm1',
          title: '故园',
          filename: '/artworks/版画/故园 40×60cm 2024.jpg',
          year: '2024',
          medium: '版画 40×60cm',
          description: '记忆中的家园，在铜版的刻痕中重新浮现。每一道线条都是对故土的深情回望。',
          narrative: '故园不在远方，它住在你心里最柔软的角落。那些门前的老树、檐下的燕子、灶台的烟火——它们从未离开，只是换了一种方式陪伴。'
        },
        {
          id: 'pm2',
          title: '斜阳',
          filename: '/artworks/版画/斜阳 40×60cm 2024.jpg',
          year: '2024',
          medium: '版画 40×60cm',
          description: '斜阳映照下的风景，光影交错中透露出时光的质感与温度。',
          narrative: '斜阳是时间的低语。当阳光以最倾斜的角度穿过世界，一切都变得温柔而深邃。这是白日给予黑夜最后的礼物。'
        },
        {
          id: 'pm3',
          title: '晨',
          filename: '/artworks/版画/晨 40×60cm 2023.jpg',
          year: '2023',
          medium: '版画 40×60cm',
          description: '清晨的第一缕光，万物初醒的宁静时刻。版画的肌理赋予晨光以独特的质感。',
          narrative: '晨，是一切开始之前的那刻宁静。在世界还未完全醒来时，有一种只属于早起者的寂静，清冽如山泉，透明如露珠。'
        },
        {
          id: 'pm4',
          title: '暮',
          filename: '/artworks/版画/暮 40×60cm 2023.jpg',
          year: '2023',
          medium: '版画 40×60cm',
          description: '日暮时分的沉思，暗色调中蕴含着对时间流逝的感悟与留恋。',
          narrative: '暮，是白日的终章。当最后的余晖沉入地平线，世界换上了夜的衣裳。暮色中的一切都显得格外珍贵，因为你知道，它们即将消失。'
        },
        {
          id: 'pm5',
          title: '白夜',
          filename: '/artworks/版画/白夜 40×60cm 2024.jpg',
          year: '2024',
          medium: '版画 40×60cm',
          description: '极地白夜的神秘与超现实感，光明与黑暗的边界在此消融。',
          narrative: '在白夜里，时间失去了意义。太阳不落，月亮不升，世界悬浮在一个永恒的黄昏中。这是大自然最魔幻的时刻——当你分不清是昼是夜，便看见了真实。'
        },
        {
          id: 'pm6',
          title: '雪花梦',
          filename: '/artworks/版画/雪花梦 铜版 19×19cm.jpg',
          year: '2024',
          medium: '铜版 19×19cm',
          description: '雪花的梦境，在铜版的精细刻线中绽放。微观世界的诗意呈现。',
          narrative: '每一片雪花都是一个梦。它们从天空飘落，带着云的秘密，风的记忆。当一片雪花落在你的掌心，那是天空在对你耳语。'
        },
        {
          id: 'pm7',
          title: '印记 I',
          filename: '/artworks/版画/104676326710465309.png',
          year: '2024',
          medium: '版画',
          description: '版画独有的印痕美学，在纸与版的对话中寻找表达的边界。',
          narrative: '每一次压印，都是一次不可逆的承诺。版画的魅力在于——你无法撤销，只能前行。这正如人生，每一步都是最终的印记。'
        },
        {
          id: 'pm8',
          title: '印记 II',
          filename: '/artworks/版画/1222117052946576.png',
          year: '2024',
          medium: '版画',
          description: '延续印记系列，在重复与变异中探索版画语言的可能性。',
          narrative: '相同版面，不同印次，每一次都是新的生命。版画告诉我们：即使是最精确的重复，也蕴含着微妙的差异——这正是手工的温度。'
        },
        {
          id: 'pm9',
          title: '痕迹',
          filename: '/artworks/版画/136373551769510854.jpg',
          year: '2024',
          medium: '版画',
          description: '刻刀留下的痕迹，是艺术家与材料之间最直接的对话记录。',
          narrative: '痕迹是时间的证据。每一道刻痕都记录着手的力度、心的方向。在版画中，痕迹不是瑕疵，而是最真实的表达。'
        },
        {
          id: 'pm10',
          title: '蚀刻 I',
          filename: '/artworks/版画/236354819191866254.jpg',
          year: '2024',
          medium: '版画',
          description: '酸蚀在铜版上创造的细腻纹理，化学与艺术的奇妙共生。',
          narrative: '酸液在铜面上缓缓侵蚀，如同时间在岩石上刻下痕迹。这不是破坏，而是蜕变——在腐蚀中诞生新的美。'
        },
        {
          id: 'pm11',
          title: '蚀刻 II',
          filename: '/artworks/版画/260017839520519551.png',
          year: '2024',
          medium: '版画',
          description: '蚀刻技法的深入探索，在微观层面发现宏大的视觉景观。',
          narrative: '当你凑近观看蚀刻的细节，会发现一个微观宇宙。那些被酸液雕刻的纹理，如同大地的裂缝、河流的支脉——最微小的细节中藏着最宏大的叙事。'
        },
        {
          id: 'pm12',
          title: '深线',
          filename: '/artworks/版画/395057217895651925.png',
          year: '2024',
          medium: '版画',
          description: '深沉有力的线条构成画面的骨架，展现出版画独有的力量感。',
          narrative: '深线是版画的脊梁。它不妥协，不犹豫，一笔下去便是定局。这种果断，是版画给予艺术家的勇气。'
        },
        {
          id: 'pm13',
          title: '交织',
          filename: '/artworks/版画/552447023085430662.png',
          year: '2024',
          medium: '版画',
          description: '线条的交织与重叠，构建出丰富的视觉层次与空间深度。',
          narrative: '当线条开始交织，故事便有了厚度。每一条线都有自己的方向，但当它们相遇，便创造了超越个体的意义。'
        },
        {
          id: 'pm14',
          title: '暗涌',
          filename: '/artworks/版画/650871698363060915.png',
          year: '2024',
          medium: '版画',
          description: '平静表面下的暗流涌动，黑白色调中蕴含着巨大的情感张力。',
          narrative: '最深的海洋表面最为平静。暗涌是那些未被说出的情感、未被表达的渴望——它们不在画面上，却在你的心里翻涌。'
        },
        {
          id: 'pm15',
          title: '幽光',
          filename: '/artworks/版画/814720543986299714.png',
          year: '2024',
          medium: '版画',
          description: '黑暗中透出的一缕幽光，版画对光影的极致追求。',
          narrative: '在无尽的黑暗中，哪怕最微弱的光也足以指引方向。幽光是希望的隐喻——它不张扬，却从不熄灭。'
        },
        {
          id: 'pm16',
          title: '回响',
          filename: '/artworks/版画/87958992029989171.png',
          year: '2024',
          medium: '版画',
          description: '形式与内容的回响，在版画的重复印制中寻找差异的诗意。',
          narrative: '回响是声音的来世。当第一个声音消散，它的回响还在——更轻、更远，却更加清晰。好的作品如同回响，在你看完之后，仍在心中震荡。'
        },
        {
          id: 'pm17',
          title: '余韵',
          filename: '/artworks/版画/918207366975297157.png',
          year: '2024',
          medium: '版画',
          description: '画面的余韵悠长，在留白与墨色之间寻找呼吸的节奏。',
          narrative: '余韵是艺术最奢侈的馈赠。当画面已经结束，余韵才刚刚开始——它在你的记忆中生长，在梦中变形，最终成为你的一部分。'
        }
      ]
    },
    {
      id: 'digital',
      name: '数字绘画',
      nameEn: 'Digital Art',
      description: '在像素与算法之间寻找手感的温度，数字媒介中的自由表达与无限可能',
      cover: '/artworks/数字绘画/18.jpg',
      artworks: [
        {
          id: 'd1',
          title: '序章',
          filename: '/artworks/数字绘画/1.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '数字世界的开篇，传统美学与数字技法的初次融合尝试。',
          narrative: '一切始于一个像素。当第一笔落在数字画布上，一个新的世界便开始呼吸。序章不是结束前的开始，而是勇气本身——迈出第一步的勇气。'
        },
        {
          id: 'd2',
          title: '涟漪',
          filename: '/artworks/数字绘画/2.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '数字笔触创造的涟漪效果，在虚拟空间中模拟自然的韵律。',
          narrative: '一颗数字的水滴落入虚拟的湖面，涟漪向四周扩散。这不是对自然的模仿，而是对自然法则的致敬——在数字世界中，美依然遵循着最古老的规律。'
        },
        {
          id: 'd3',
          title: '折叠',
          filename: '/artworks/数字绘画/3.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '空间的折叠与重构，数字媒介赋予空间表现以新的自由度。',
          narrative: '在数字世界中，空间是可以折叠的。你可以将远方拉到眼前，将过去叠入现在。折叠不是压缩，而是一种新的观看方式——当空间被重新组织，意义也随之改变。'
        },
        {
          id: 'd4',
          title: '像素森林',
          filename: '/artworks/数字绘画/18.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '以数字手法构建的森林意象，像素与笔触的共生。',
          narrative: '在这片像素森林中，每一棵树都由0和1组成，但它们依然在风中摇曳。数字不是冰冷的——当你用心去画，像素也会呼吸。'
        },
        {
          id: 'd5',
          title: '虚空之境',
          filename: '/artworks/数字绘画/20.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '虚拟与现实的边界消融，在数字虚空中构建精神的栖息地。',
          narrative: '虚空不是空无，而是可能性的容器。在数字的虚空中，一切皆可创造，一切皆可毁灭。这是自由，也是责任——你将成为这个世界的造物主。'
        },
        {
          id: 'd6',
          title: '回声',
          filename: '/artworks/数字绘画/21.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '视觉的回声效果，数字滤镜与传统构图的对话。',
          narrative: '数字世界中的回声不同于现实——它可以被精确控制，却也因此失去了某种偶然的美。这幅作品试图在控制与失控之间，找回那份珍贵的随机性。'
        },
        {
          id: 'd7',
          title: '涌现',
          filename: '/artworks/数字绘画/40331997194097532.jpg',
          year: '2024',
          medium: '数字绘画',
          description: '从混沌中涌现的秩序，数字生成与手工调整的协同创作。',
          narrative: '涌现是复杂系统最神奇的现象——当简单的规则反复运行，意想不到的秩序便从中诞生。这幅画便是如此：始于随机，终于意义。'
        }
      ]
    },
    {
      id: 'ai',
      name: 'AI绘画',
      nameEn: 'AI Art',
      description: '人机共创的艺术实验，在算法的梦境中寻找灵感的边界与超越',
      cover: '/artworks/AI绘画/gurevich_miroslava_surreal_art_piece_depicting_large_twisted_or_680135ae-3940-46bb-ad5b-8656c7ac4c30.png',
      artworks: [
        {
          id: 'a1',
          title: '破败之器',
          filename: '/artworks/AI绘画/5938w_A_dilapidated_furniture_with_tattered_seams_Winding_and__06564b62-7ac0-4c4c-b75f-431215252034.png',
          year: '2024',
          medium: 'AI生成',
          description: '破败的器物，残破的缝隙中蔓延着时间的痕迹。AI对衰败美学的独特诠释。',
          narrative: '破败不是终结，而是另一种存在方式。当器物失去了功能，它便获得了成为艺术的自由。裂缝中的光芒，比完好的表面更加动人。'
        },
        {
          id: 'a2',
          title: '裂隙之光',
          filename: '/artworks/AI绘画/8d3bdd90-fc28-495f-9afe-3c117f9ff857_0_1.png',
          year: '2024',
          medium: 'AI生成',
          description: '从裂隙中透出的光芒，在破碎中寻找重生的可能。',
          narrative: '莱昂纳德·科恩说："万物皆有裂痕，那是光照进来的地方。"AI似乎也理解这个道理——它在破碎中寻找光，在残缺中发现完整。'
        },
        {
          id: 'a3',
          title: '烟之形',
          filename: '/artworks/AI绘画/arnold128160_a_group_of_smoke_with_the_shadows_of_trees_faintly_3e6da953-9cef-468e-9b28-a71f9c1f4544.png',
          year: '2024',
          medium: 'AI生成',
          description: '烟雾的群像，树影在其中若隐若现。AI对虚实边界的诗意探索。',
          narrative: '烟是最诚实的物质——它从不假装自己是别的什么。当烟与树影相遇，虚与实的界限便开始舞蹈。AI在这场舞蹈中，扮演了最敏锐的记录者。'
        },
        {
          id: 'a4',
          title: '废墟花园',
          filename: '/artworks/AI绘画/eb1d12dd-78a7-4b76-8e8f-04e3ad4480ba_0_0.png',
          year: '2024',
          medium: 'AI生成',
          description: '废墟之上绽放的花园，衰败与新生在同一个画面中共存。',
          narrative: '在废墟上种花，是人类最古老的浪漫。AI继承了这份浪漫——它在残垣断壁中看见了花园的潜力，在衰败中预感了新生。'
        },
        {
          id: 'a5',
          title: '缠绕',
          filename: '/artworks/AI绘画/f799af3b-a85e-4fda-a5ba-4bdf8832090a_0_3.png',
          year: '2024',
          medium: 'AI生成',
          description: '形态的缠绕与生长，自然力量在AI的想象中具象化。',
          narrative: '缠绕是生命的姿态——藤蔓缠绕树木，河流缠绕山脉，记忆缠绕当下。AI用算法模拟了这种缠绕，却意外地捕捉到了生命最本质的冲动：向上，向光，向彼此。'
        },
        {
          id: 'a6',
          title: '超现实之梦',
          filename: '/artworks/AI绘画/gurevich_miroslava_surreal_art_piece_depicting_large_twisted_or_680135ae-3940-46bb-ad5b-8656c7ac4c30.png',
          year: '2024',
          medium: 'AI生成',
          description: '超现实的梦境图景，扭曲的形态在AI的潜意识中浮现。',
          narrative: 'AI也会做梦吗？如果会，那一定是这样的——形态自由扭曲，色彩不受约束，逻辑让位于直觉。这不是计算的结果，而是计算的梦境。'
        },
        {
          id: 'a7',
          title: '自然之殇',
          filename: '/artworks/AI绘画/john168918_A_dilapidated_piece_of_furnishing_in_a_natural_setti_8a328e67-8727-4e6a-91cf-e70d0f8daeb5.png',
          year: '2024',
          medium: 'AI生成',
          description: '自然环境中的人造物残骸，文明与自然的反思性对话。',
          narrative: '当人造物回归自然，它便开始了一段新的旅程。锈蚀、苔藓、藤蔓——自然用温柔的方式回收了属于它的一切。这不是毁灭，而是归还。'
        },
        {
          id: 'a8',
          title: '烟之体',
          filename: '/artworks/AI绘画/linaavdeeva_the_main_body_is_a_group_of_smoke_in_fertile_soilwi_978ec402-f0dd-4186-a8ca-9f3100a841d7.png',
          year: '2024',
          medium: 'AI生成',
          description: '烟雾为主体，在沃土中若隐若现。AI对物质形态边界的消解。',
          narrative: '如果烟雾有了身体，它会选择什么样的形态？AI给出了答案——它像一株植物，从沃土中生长，却保持着烟的轻盈。这是对物质与精神边界的最诗意的消解。'
        },
        {
          id: 'a9',
          title: '暗园',
          filename: '/artworks/AI绘画/olzpokhzvd_A_dilapidated_natural_environment_lush_black_plants__cc2f40d1-5049-49f9-8026-43bf2ceb521f(1).png',
          year: '2024',
          medium: 'AI生成',
          description: '幽暗的自然花园，繁茂的黑色植物营造出神秘而诱人的氛围。',
          narrative: '在暗园中，植物以黑色绽放。这不是死亡的颜色，而是最深沉的生命力——在不见光的地方，生命以自己的方式发光。暗园是AI对生命韧性的礼赞。'
        },
        {
          id: 'a10',
          title: '缝隙中的风',
          filename: '/artworks/AI绘画/ymann4126_A_dilapidated_furniture_with_tattered_seams_Winding__310e1ceb-c074-42a4-bb18-d601892ccf1f.png',
          year: '2024',
          medium: 'AI生成',
          description: '破败家具的缝隙中，风在穿行。时间与物质在AI眼中的对话。',
          narrative: '风从缝隙中穿过，带走了一切可以带走的。留下的，是最坚韧的部分——那些经历了风、接受了风、却依然存在的部分。缝隙不是缺陷，而是风的路。'
        }
      ]
    }
  ]
};

export default galleryData;