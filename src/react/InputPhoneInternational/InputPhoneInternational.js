import "./InputPhoneInternational.scss";
import { Field } from "formik";
import InputMask from "react-input-mask";
import { ENV } from '../../env';

import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

const masks = [
  {
    country: "Россия",
    code: "+7",
    mask: "+7 (999) 999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ru.png`,
  },
  {
    country: "Беларусь",
    code: "+375",
    mask: "+375 (99) 999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/by_.png`,
  },
  {
    country: "Киргизия",
    code: "+996",
    mask: "+\\9\\96 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/kg.png`,
  },
  {
    country: "Казахстан",
    code: "+7",
    mask: "+7 (999) 999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/kz.png`,
  },
  {
    country: "Узбекистан",
    code: "+998",
    mask: "+\\9\\98 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/uz.png`,
  },
  {
    country: "Армения",
    code: "+374",
    mask: "+374 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/am.png`,
  },
  {
    country: "Азербайджан",
    code: "+994",
    mask: "+\\9\\94 99-999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/az.png`,
  },
  {
    country: "Абхазия",
    code: "+7",
    mask: "+7 (999) 999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ab.png`,
  },
  {
    country: "Украина",
    code: "+380",
    mask: "+380 (99) 999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ua.png`,
  },
  {
    country: "США",
    code: "+1",
    mask: "+1 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/us.png`,
  },
  {
    country: "Великобритания",
    code: "+44",
    mask: "+44 99999 999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/uk.png`,
  },
  {
    country: "Андорра",
    code: "+376",
    mask: "+376 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ad.png`,
  },
  {
    country: "Объединенные Арабские эмираты",
    code: "+971",
    mask: "+\\971 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ae.png`,
  },
  {
    country: "Афганистан",
    code: "+93",
    mask: "+\\93 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/af.png`,
  },
  {
    country: "Антигуа и Барбуда",
    code: "+1268",
    mask: "+1268 999-9999]",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ag.png`,
  },
  {
    country: "Ангилья",
    code: "+1264",
    mask: "+1264 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ai.png`,
  },
  {
    country: "Албания",
    code: "+355",
    mask: "+355 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/al.png`,
  },
  {
    country: "Нидерландские Антильские острова",
    code: "+599",
    mask: "+5\\9\\9 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/an.png`,
  },
  {
    country: "Ангола",
    code: "+244",
    mask: "+244 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ao.png`,
  },
  {
    country: "Австралийская антарктическая база",
    code: "+6721",
    mask: "+6721 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/aq.png`,
  },
  {
    country: "Аргентина",
    code: "+54",
    mask: "+54 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ar.png`,
  },
  {
    country: "Американское Самоа",
    code: "+1684",
    mask: "+1684 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/as.png`,
  },
  {
    country: "Австрия",
    code: "+43",
    mask: "+43 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/at.png`,
  },
  {
    country: "Австралия",
    code: "+61",
    mask: "+61 (9-9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/au.png`,
  },
  {
    country: "Аруба",
    code: "+297",
    mask: "+2\\97 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/aw.png`,
  },
  {
    country: "Босния и Герцеговина",
    code: "+387",
    mask: "+387 99-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ba.png`,
  },
  {
    country: "Барбадос",
    code: "+1246",
    mask: "+1246 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bb.png`,
  },
  {
    country: "Бангладеш",
    code: "+880",
    mask: "+880 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bd.png`,
  },
  {
    country: "Бельгия",
    code: "+32",
    mask: "+32 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/be.png`,
  },
  {
    country: "Буркина Фасо",
    code: "+226",
    mask: "+226 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bf.png`,
  },
  {
    country: "Болгария",
    code: "+359",
    mask: "+35\\9 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bg.png`,
  },
  {
    country: "Бахрейн",
    code: "+973",
    mask: "+\\973 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bh.png`,
  },
  {
    country: "Бурунди",
    code: "+257",
    mask: "+257 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bi.png`,
  },
  {
    country: "Бенин",
    code: "+229",
    mask: "+22\\9 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bj.png`,
  },
  {
    country: "Бермудские острова",
    code: "+1441",
    mask: "+1441 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bm.png`,
  },
  {
    country: "Бруней-Даруссалам",
    code: "+673",
    mask: "+673 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bn.png`,
  },
  {
    country: "Боливия",
    code: "+591",
    mask: "+5\\91 9-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bo.png`,
  },
  {
    country: "Бразилия",
    code: "+55",
    mask: "+55 (99) 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/br.png`,
  },
  {
    country: "Багамские Острова",
    code: "+1242",
    mask: "+1242 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bs.png`,
  },
  {
    country: "Ботсвана",
    code: "+267",
    mask: "+267 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bw.png`,
  },
  {
    country: "Белиз",
    code: "+501",
    mask: "+501 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/bz.png`,
  },
  {
    country: "Канада",
    code: "+1",
    mask: "+1 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ca.png`,
  },
  {
    country: "Дем. Респ. Конго",
    code: "+243",
    mask: "+243 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cd.png`,
  },
  {
    country: "Центроафриканская Республика",
    code: "+236",
    mask: "+236 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cf.png`,
  },
  {
    country: "Конго (Браззавиль)",
    code: "+242",
    mask: "+242 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cg.png`,
  },
  {
    country: "Швейцария",
    code: "+41",
    mask: "+41 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ch.png`,
  },
  {
    country: "Кот-д'Ивуар",
    code: "+225",
    mask: "+225 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ci.png`,
  },
  {
    country: "Острова Кука",
    code: "+682",
    mask: "+682 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ck.png`,
  },
  {
    country: "Чили",
    code: "+56",
    mask: "+56 9-9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cl.png`,
  },
  {
    country: "Камерун",
    code: "+237",
    mask: "+237 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cm.png`,
  },
  {
    country: "КНР",
    code: "+86",
    mask: "+86 (999)9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cn.png`,
  },
  {
    country: "Колумбия",
    code: "+57",
    mask: "+57 (999)999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/co.png`,
  },
  {
    country: "Коста-Рика",
    code: "+506",
    mask: "+506 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cr.png`,
  },
  {
    country: "Куба",
    code: "+53",
    mask: "+53 9-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cu.png`,
  },
  {
    country: "Кабо-Верде",
    code: "+238",
    mask: "+238 (999) 99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cv.png`,
  },
  {
    country: "Кюрасао",
    code: "+599",
    mask: "+5\\9\\9 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cw.png`,
  },
  {
    country: "Кипр",
    code: "+357",
    mask: "+357 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cy.png`,
  },
  {
    country: "Чехия",
    code: "+420",
    mask: "+420 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/cz.png`,
  },
  {
    country: "Германия",
    code: "+49",
    mask: "+4\\9 (999) 999-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/de.png`,
  },
  {
    country: "Джибути",
    code: "+253",
    mask: "+253 99-99-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/dj.png`,
  },
  {
    country: "Дания",
    code: "+45",
    mask: "+45 99-99-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/dk.png`,
  },
  {
    country: "Доминика",
    code: "+1767",
    mask: "+1767 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/dm.png`,
  },
  {
    country: "Доминиканская Республика",
    code: "+18",
    mask: "+18 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/do.png`,
  },
  {
    country: "Алжир",
    code: "+213",
    mask: "+213 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/dz.png`,
  },
  {
    country: "Эквадор",
    code: "+593",
    mask: "+5\\93 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ec.png`,
  },
  {
    country: "Эстония",
    code: "+372",
    mask: "+372 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ee.png`,
  },
  {
    country: "Египет",
    code: "+20",
    mask: "+20 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/eg.png`,
  },
  {
    country: "Эритрея",
    code: "+291",
    mask: "+2\\91 9-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/er.png`,
  },
  {
    country: "Испания",
    code: "+34",
    mask: "+34 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/es.png`,
  },
  {
    country: "Эфиопия",
    code: "+251",
    mask: "+251 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/et.png`,
  },
  {
    country: "Финляндия",
    code: "+358",
    mask: "+358 (999) 999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/fi.png`,
  },
  {
    country: "Фиджи",
    code: "+679",
    mask: "+67\\9 99-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/fj.png`,
  },
  {
    country: "Фолклендские острова",
    code: "+500",
    mask: "+500 99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/fk.png`,
  },
  {
    country: "Ф.Ш. Микронезии",
    code: "+691",
    mask: "+6\\91 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/fm.png`,
  },
  {
    country: "Фарерские острова",
    code: "+298",
    mask: "+2\\98 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/fo.png`,
  },
  {
    country: "Франция",
    code: "+33",
    mask: "+33 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/fr.png`,
  },
  {
    country: "Габон",
    code: "+241",
    mask: "+241 9-99-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ga.png`,
  },
  {
    country: "Гренада",
    code: "+1473",
    mask: "+1473 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gd.png`,
  },
  {
    country: "Грузия",
    code: "+995",
    mask: "+\\9\\95 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ge.png`,
  },
  {
    country: "Фр. Гвиана",
    code: "+594",
    mask: "+5\\94 99999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gf.png`,
  },
  {
    country: "Гана",
    code: "+233",
    mask: "+233 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gh.png`,
  },
  {
    country: "Гибралтар",
    code: "+350",
    mask: "+350 999-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gi.png`,
  },
  {
    country: "Гренландия",
    code: "+299",
    mask: "+2\\9\\9 99-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gl.png`,
  },
  {
    country: "Гамбия",
    code: "+220",
    mask: "+220 (999) 99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gm.png`,
  },
  {
    country: "Гвинея",
    code: "+224",
    mask: "+224 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gn.png`,
  },
  {
    country: "Экваториальная Гвинея",
    code: "+240",
    mask: "+240 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gq.png`,
  },
  {
    country: "Греция",
    code: "+30",
    mask: "+30 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gr.png`,
  },
  {
    country: "Гватемала",
    code: "+502",
    mask: "+502 9-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gt.png`,
  },
  {
    country: "Гуам",
    code: "+1671",
    mask: "+1671 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gu.png`,
  },
  {
    country: "Гвинея-Бисау",
    code: "+245",
    mask: "+245 9-999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gw.png`,
  },
  {
    country: "Гайана",
    code: "+592",
    mask: "+5\\92 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/gy.png`,
  },
  {
    country: "Гонконг",
    code: "+852",
    mask: "+852 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/hk.png`,
  },
  {
    country: "Гондурас",
    code: "+504",
    mask: "+504 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/hn.png`,
  },
  {
    country: "Хорватия",
    code: "+385",
    mask: "+385 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/hr.png`,
  },
  {
    country: "Гаити",
    code: "+509",
    mask: "+50\\9 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ht.png`,
  },
  {
    country: "Венгрия",
    code: "+36",
    mask: "+36 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/hu.png`,
  },
  {
    country: "Индонезия",
    code: "+62",
    mask: "+62 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/id.png`,
  },
  {
    country: "Ирландия",
    code: "+353",
    mask: "+353 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ie.png`,
  },
  {
    country: "Израиль",
    code: "+972",
    mask: "+\\972 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/il.png`,
  },
  {
    country: "Индия",
    code: "+91",
    mask: "+\\91 (9999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/in.png`,
  },
  {
    country: "Диего-Гарсия",
    code: "+246",
    mask: "+246 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/io.png`,
  },
  {
    country: "Ирак",
    code: "+964",
    mask: "+\\964 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/iq.png`,
  },
  {
    country: "Иран",
    code: "+98",
    mask: "+\\98 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ir.png`,
  },
  {
    country: "Исландия",
    code: "+354",
    mask: "+354 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/is.png`,
  },
  {
    country: "Италия",
    code: "+39",
    mask: "+3\\9 (999) 9999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/it.png`,
  },
  {
    country: "Ямайка",
    code: "+1876",
    mask: "+1876 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/jm.png`,
  },
  {
    country: "Иордания",
    code: "+962",
    mask: "+\\962 9-9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/jo.png`,
  },
  {
    country: "Япония",
    code: "+81",
    mask: "+81 99-9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/jp.png`,
  },
  {
    country: "Кения",
    code: "+254",
    mask: "+254 999-999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ke.png`,
  },
  {
    country: "Камбоджа",
    code: "+855",
    mask: "+855 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/kh.png`,
  },
  {
    country: "Кирибати",
    code: "+686",
    mask: "+686 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ki.png`,
  },
  {
    country: "Коморы",
    code: "+269",
    mask: "+26\\9 99-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/km.png`,
  },
  {
    country: "Сент-Китс и Невис",
    code: "+1869",
    mask: "+186\\9 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/kn.png`,
  },
  {
    country: "Кувейт",
    code: "+965",
    mask: "+\\965 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/kw.png`,
  },
  {
    country: "Каймановы острова",
    code: "+1345",
    mask: "+1345 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ky.png`,
  },
  {
    country: "Лаос",
    code: "+856",
    mask: "+856 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/la.png`,
  },
  {
    country: "Ливан",
    code: "+961",
    mask: "+\\961 99-999-999]",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lb.png`,
  },
  {
    country: "Сент-Люсия",
    code: "+1758",
    mask: "+1758 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lc.png`,
  },
  {
    country: "Лихтенштейн",
    code: "+423",
    mask: "+423 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/li.png`,
  },
  {
    country: "Шри-Ланка",
    code: "+94",
    mask: "+\\94 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lk.png`,
  },
  {
    country: "Либерия",
    code: "+231",
    mask: "+231 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lr.png`,
  },
  {
    country: "Лесото",
    code: "+266",
    mask: "+266 9-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ls.png`,
  },
  {
    country: "Литва",
    code: "+370",
    mask: "+370 (999) 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lt.png`,
  },
  {
    country: "Люксембург",
    code: "+352",
    mask: "+352 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lu.png`,
  },
  {
    country: "Латвия",
    code: "+371",
    mask: "+371 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/lv.png`,
  },
  {
    country: "Ливия",
    code: "+218",
    mask: "+218 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ly.png`,
  },
  {
    country: "Марокко",
    code: "+212",
    mask: "+212 99-9999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ma.png`,
  },
  {
    country: "Монако",
    code: "+377",
    mask: "+377 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mc.png`,
  },
  {
    country: "Молдова",
    code: "+373",
    mask: "+373 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/md.png`,
  },
  {
    country: "Черногория",
    code: "+382",
    mask: "+382 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/me.png`,
  },
  {
    country: "Мадагаскар",
    code: "+261",
    mask: "+261 99-99-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mg.png`,
  },
  {
    country: "Маршалловы Острова",
    code: "+692",
    mask: "+6\\92 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mh.png`,
  },
  {
    country: "Респ. Македония",
    code: "+389",
    mask: "+38\\9 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mk.png`,
  },
  {
    country: "Мали",
    code: "+223",
    mask: "+223 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ml.png`,
  },
  {
    country: "Бирма (Мьянма)",
    code: "+95",
    mask: "+\\95 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mm.png`,
  },
  {
    country: "Монголия",
    code: "+976",
    mask: "+\\976 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mn.png`,
  },
  {
    country: "Макао",
    code: "+853",
    mask: "+853 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mo.png`,
  },
  {
    country: "Северные Марианские острова Сайпан",
    code: "+1670",
    mask: "+1670 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mp.png`,
  },
  {
    country: "Мартиника",
    code: "+596",
    mask: "+5\\96 (999) 99-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mq.png`,
  },
  {
    country: "Мавритания",
    code: "+222",
    mask: "+222 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mr.png`,
  },
  {
    country: "Монтсеррат",
    code: "+1664",
    mask: "+1664 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ms.png`,
  },
  {
    country: "Мальта",
    code: "+356",
    mask: "+356 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mt.png`,
  },
  {
    country: "Маврикий",
    code: "+230",
    mask: "+230 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mu.png`,
  },
  {
    country: "Мальдивские острова",
    code: "+960",
    mask: "+\\960 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mv.png`,
  },
  {
    country: "Малави",
    code: "+265",
    mask: "+265 9-9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mw.png`,
  },
  {
    country: "Мексика",
    code: "+52",
    mask: "+52 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mx.png`,
  },
  {
    country: "Малайзия",
    code: "+60",
    mask: "+60 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/my.png`,
  },
  {
    country: "Мозамбик",
    code: "+258",
    mask: "+258 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/mz.png`,
  },
  {
    country: "Намибия",
    code: "+264",
    mask: "+264 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/na.png`,
  },
  {
    country: "Нигер",
    code: "+227",
    mask: "+227 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ne.png`,
  },
  {
    country: "Норфолк (остров)",
    code: "+6723",
    mask: "+6723 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/nf.png`,
  },
  {
    country: "Нигерия",
    code: "+234",
    mask: "+234 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ng.png`,
  },
  {
    country: "Никарагуа",
    code: "+505",
    mask: "+505 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ni.png`,
  },
  {
    country: "Нидерланды",
    code: "+31",
    mask: "+31 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/nl.png`,
  },
  {
    country: "Норвегия",
    code: "+47",
    mask: "+47 (999) 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/no.png`,
  },
  {
    country: "Непал",
    code: "+977",
    mask: "+\\977 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/np.png`,
  },
  {
    country: "Науру",
    code: "+674",
    mask: "+674 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/nr.png`,
  },
  {
    country: "Ниуэ",
    code: "+683",
    mask: "+683 9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/nu.png`,
  },
  {
    country: "Новая Зеландия",
    code: "+64",
    mask: "+64 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/nz.png`,
  },
  {
    country: "Оман",
    code: "+968",
    mask: "+\\968 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/om.png`,
  },
  {
    country: "Панама",
    code: "+507",
    mask: "+507 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pa.png`,
  },
  {
    country: "Перу",
    code: "+51",
    mask: "+51 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pe.png`,
  },
  {
    country: "Папуа-Новая Гвинея",
    code: "+675",
    mask: "+675 (999) 99-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pg.png`,
  },
  {
    country: "Филиппины",
    code: "+63",
    mask: "+63 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ph.png`,
  },
  {
    country: "Пакистан",
    code: "+92",
    mask: "+\\92 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pk.png`,
  },
  {
    country: "Польша",
    code: "+48",
    mask: "+48 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pl.png`,
  },
  {
    country: "Палестина",
    code: "+970",
    mask: "+\\970 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ps.png`,
  },
  {
    country: "Португалия",
    code: "+351",
    mask: "+351 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pt.png`,
  },
  {
    country: "Палау",
    code: "+680",
    mask: "+680 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/pw.png`,
  },
  {
    country: "Парагвай",
    code: "+595",
    mask: "+5\\95 (999)999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/py.png`,
  },
  {
    country: "Катар",
    code: "+974",
    mask: "+\\974 9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/qa.png`,
  },
  {
    country: "Реюньон",
    code: "+262",
    mask: "+262 99999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/re.png`,
  },
  {
    country: "Румыния",
    code: "+40",
    mask: "+40 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ro.png`,
  },
  {
    country: "Сербия",
    code: "+381",
    mask: "+381 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/rs.png`,
  },
  {
    country: "Руанда",
    code: "+250",
    mask: "+250 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/rw.png`,
  },
  {
    country: "Саудовская Аравия",
    code: "+966",
    mask: "+\\966 9-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sa.png`,
  },
  {
    country: "Соломоновы Острова",
    code: "+677",
    mask: "+677 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sb.png`,
  },
  {
    country: "Сейшелы",
    code: "+248",
    mask: "+248 9-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sc.png`,
  },
  {
    country: "Судан",
    code: "+249",
    mask: "+24\\9 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sd.png`,
  },
  {
    country: "Швеция",
    code: "+46",
    mask: "+46 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/se.png`,
  },
  {
    country: "Сингапур",
    code: "+6565",
    mask: "+6565 9999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sg.png`,
  },
  {
    country: "Остров Святой Елены",
    code: "+290",
    mask: "+2\\90 9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sh.png`,
  },
  {
    country: "Словения",
    code: "+386",
    mask: "+386 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/si.png`,
  },
  {
    country: "Словакия",
    code: "+421",
    mask: "+421 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sk.png`,
  },
  {
    country: "Сьерра-Леоне",
    code: "+232",
    mask: "+232 99-999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sl.png`,
  },
  {
    country: "Сан-Марино",
    code: "+378",
    mask: "+378 9999-999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sm.png`,
  },
  {
    country: "Сенегал",
    code: "+221",
    mask: "+221 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sn.png`,
  },
  {
    country: "Сомали",
    code: "+252",
    mask: "+252 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/so.png`,
  },
  {
    country: "Суринам",
    code: "+597",
    mask: "+5\\97 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sr.png`,
  },
  {
    country: "Южный Судан",
    code: "+211",
    mask: "+211 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ss.png`,
  },
  {
    country: "Сан-Томе и Принсипи",
    code: "+239",
    mask: "+23\\9 99-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/st.png`,
  },
  {
    country: "Сальвадор",
    code: "+503",
    mask: "+503 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sv.png`,
  },
  {
    country: "Сирия (Сирийская арабская республика)",
    code: "+963",
    mask: "+\\963 99-9999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sy.png`,
  },
  {
    country: "Свазиленд",
    code: "+268",
    mask: "+268 99-99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/sz.png`,
  },
  {
    country: "Тёркс и Кайкос",
    code: "+1649",
    mask: "+164\\9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tc.png`,
  },
  {
    country: "Чад",
    code: "+235",
    mask: "+235 99-99-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/td.png`,
  },
  {
    country: "Того",
    code: "+228",
    mask: "+228 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tg.png`,
  },
  {
    country: "Таиланд",
    code: "+66",
    mask: "+66 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/th.png`,
  },
  {
    country: "Таджикистан",
    code: "+992",
    mask: "+\\9\\92 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tj.png`,
  },
  {
    country: "Токелау",
    code: "+690",
    mask: "+6\\90 9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tk.png`,
  },
  {
    country: "Восточный Тимор",
    code: "+670",
    mask: "+670 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tl.png`,
  },
  {
    country: "Туркменистан",
    code: "+993",
    mask: "+\\9\\93 9-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tm.png`,
  },
  {
    country: "Тунис",
    code: "+216",
    mask: "+216 99-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tn.png`,
  },
  {
    country: "Тонга",
    code: "+676",
    mask: "+676 99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/to.png`,
  },
  {
    country: "Турция",
    code: "+90",
    mask: "+\\90 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tr.png`,
  },
  {
    country: "Тринидад и Тобаго",
    code: "+1868",
    mask: "+1868 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tt.png`,
  },
  {
    country: "Тувалу",
    code: "+6882",
    mask: "+6882 9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tv.png`,
  },
  {
    country: "Тайвань",
    code: "+886",
    mask: "+886 9-9999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tw.png`,
  },
  {
    country: "Танзания",
    code: "+255",
    mask: "+255 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/tz.png`,
  },
  {
    country: "Уганда",
    code: "+256",
    mask: "+256 (999) 999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ug.png`,
  },
  {
    country: "Уругвай",
    code: "+598",
    mask: "+5\\98 9-999-99-99",
    img: `${window.routes5.Media[`url${ENV}`]}flags/uy.png`,
  },
  {
    country: "Ватикан",
    code: "+396698",
    mask: "+3\\966\\98 99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/va.png`,
  },
  {
    country: "Сент-Винсент и Гренадины",
    code: "+1784",
    mask: "+1784 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/vc.png`,
  },
  {
    country: "Венесуэла",
    code: "+58",
    mask: "+58 (999) 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ve.png`,
  },
  {
    country: "Британские Виргинские острова",
    code: "+1284",
    mask: "+1284 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/vg.png`,
  },
  {
    country: "Американские Виргинские острова",
    code: "+1340",
    mask: "+1340 999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/vi.png`,
  },
  {
    country: "Вьетнам",
    code: "+84",
    mask: "+84 (999) 9999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/vn.png`,
  },
  {
    country: "Вануату",
    code: "+678",
    mask: "+678 99-99999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/vu.png`,
  },
  {
    country: "Уоллис и Футуна",
    code: "+681",
    mask: "+681 99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/wf.png`,
  },
  {
    country: "Самоа",
    code: "+685",
    mask: "+685 99-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ws.png`,
  },
  {
    country: "Йемен",
    code: "+967",
    mask: "+\\967 999-999-999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/ye.png`,
  },
  {
    country: "Южно-Африканская Респ.",
    code: "+27",
    mask: "+27 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/za.png`,
  },
  {
    country: "Замбия",
    code: "+260",
    mask: "+260 99-999-9999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/zm.png`,
  },
  {
    country: "Зимбабве",
    code: "+263",
    mask: "+263 9-999999",
    img: `${window.routes5.Media[`url${ENV}`]}flags/zw.png`,
  },
];

const InputPhoneInternational = ({
  name,
  value,
  onChange,
  onBlur,
  onReset,
  className,
  label,
  placeholder,
  isRequired,
  isDisabled,
}) => {
  const [country, setCountry] = useState(masks[0]);

  return (
    <div
      className={`InputPhoneInternational${className ? ` ${className}` : ""}`}
    >
      <Select
        onChange={(evt) => {
          setCountry(evt.target.value);
          onReset();
        }}
        value={country}
        renderValue={(val) => (
          <img className="InputPhoneInternational__image" src={val.img} />
        )}
      >
        {masks.map((maskObj) => (
          <MenuItem value={maskObj} key={maskObj.country}>
            <div className="InputPhoneInternational__country">
              <img
                src={maskObj.img}
                className="InputPhoneInternational__image"
              />
              <p className="InputPhoneInternational__country">
                {maskObj.country}
              </p>
              <p className="InputPhoneInternational__flag">
                <b>{maskObj.code}</b>
              </p>
            </div>
          </MenuItem>
        ))}
      </Select>

      {label ? (
        <label
          className={
            isRequired
              ? "InputPhoneInternational__label InputPhoneInternational__label--required"
              : "InputPhoneInternational__label"
          }
        >
          {label}
        </label>
      ) : null}

      <InputMask
        mask={country.mask}
        maskPlaceholder={null}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
      >
        <Field
          minLength="10"
          autoComplete="off"
          autoCapitalize="off"
          className="InputPhoneInternational__field"
          type="tel"
          name={name}
          placeholder={placeholder}
        />
      </InputMask>
    </div>
  );
};

export default InputPhoneInternational;
