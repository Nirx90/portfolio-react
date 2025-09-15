import { setNavBarThemeThunk } from "../slices/navbarSlice";
import { setThemeColors } from "../slices/themeSlice";
import { setserviceCardThemeThunk } from "../slices/serviceCardSlice";
import { setExperienceThemeThunk } from "../slices/experienceSlice";
import { setSkillCardThemeThunk } from "../slices/skillSlice";
import { setReviewThemeThunk } from "../slices/reviewSlice";
import { setContactThemeThunk } from "../slices/contactSlice";
import { setHeroThemeThunk } from "../slices/heroSlice";

export const setDefaultTheme = (theme, dispatch) => {

    const color = theme.color;
    let isDark = false;
    let isNeu = false;
    if (theme.type.startsWith("Neu")) {
        isNeu = true;
    }

    dispatch(
        setNavBarThemeThunk({
            BackgroundColor: color,
            TextColor: isDark ? "white" : "black",
        })
    );

    dispatch(
        setThemeColors({
            BackgroundColor: isNeu ? color :  "white",
            PrimaryTextColor: isDark ? "whitesmoke" : "black",
            SecondaryTextColor: isDark ? "whitesmoke" : "black",
            DarkMode: isDark ? true : false,
            Animation: theme.Animation,
            HeaderColor: isDark ? "white" : "black",
        })
    );

    dispatch(
        setserviceCardThemeThunk({
            BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
            PrimaryTextColor: theme.TextColor,
            SecondaryTextColor: theme.TextColor,
            IconColor: theme.TextColor,
            BorderColor: color,
            BoxShadow: theme.BoxShadow,
        })
    );
    dispatch(
        setExperienceThemeThunk({
            BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
            TextColor: theme.TextColor,
            IconColor: theme.TextColor,
            BorderColor: color,
            BoxShadow: theme.BoxShadow,
        })
    );

    dispatch(
        setSkillCardThemeThunk({
            BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
            IconColor: theme.TextColor,
            TextColor: theme.TextColor,
            BorderColor: color,
            BoxShadow: theme.BoxShadow,
        })
    );

    dispatch(
        setReviewThemeThunk({
            BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
            IconColor: theme.TextColor,
            TextColor: theme.TextColor,
            BorderColor: color,
            BoxShadow: theme.BoxShadow,
        })
    );

    dispatch(
        setContactThemeThunk({
            BackgroundColor: theme.Gradient ? color : "rgba(255, 255, 255, 0)",
            IconColor: theme.TextColor,
            TextColor: theme.TextColor,
            BorderColor: color,
            BoxShadow: theme.BoxShadow,
        })
    );

    dispatch(
        setHeroThemeThunk({
            TextColor: theme.TextColor,
            BackgroundColor: color,
            BoxShadow: theme.BoxShadow,
        })
    );
};