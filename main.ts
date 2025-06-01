namespace SpriteKind {
    export const Contenant = SpriteKind.create()
    export const cle = SpriteKind.create()
    export const maison = SpriteKind.create()
    export const Shop = SpriteKind.create()
    export const Fusée = SpriteKind.create()
    export const objet = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    false
    )
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
// En trouvant le coffre
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau2`)
    game.showLongText("Bravo, tu as trouvé la deuxième clé", DialogLayout.Top)
    game.showLongText("Maintenant, retourne voir l'astronaute", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`niveau1`)
    Player1.x = 215
    Astronaute.setImage(img`
        ...........fffffffffff..........
        ..........f1111bbb1111f.........
        .........f11fffffffff11f........
        ........f11f616616616f11f.......
        ........f1f66166166166f1f.......
        ........f1f66616616616f1f.......
        ........f1f66661661616f1f.......
        ........f1f66661661661f1f.......
        ........f11f666616616f11f.......
        .........f11fffffffff11f........
        ..........f1111bbb1111f.........
        ...........fffffffffff..........
        .........ff11f11111f11ff........
        ........f11111f111f11111f.......
        .......f11111111111111111f......
        .......f1111f1111111f1111f......
        .......f222ff1111111ff222f......
        .......f111f111111111f111f......
        .......f111f111111111f111f......
        .......f111fffffffffff111f......
        ........ffff1111f1111ffff.......
        ...........f1111f1111f..........
        ...........f1111f1111f..........
        ...........f1111f1111f..........
        ...........f2222f2222f..........
        ...........f1111f1111f..........
        ...........f1111f1111f..........
        ...........fffffffffff..........
        ...........fbbbbfbbbbf..........
        ............ffff.ffff...........
        `)
    Astronaute.setPosition(88, 60)
    info.setScore(2)
    canaper.setImage(img`
        ..cccc.........
        .cdddbc........
        cbdddbccccccc..
        cbdddbcbdddddc.
        cbdddbcdddddbbc
        cbdddbcbbbbbbbc
        cbdddbccccccbbc
        cbdddbcddddbccc
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbdddbcdddddbc.
        cbddbbcdddddbc.
        cbbbbbcccccccc.
        cbbbbbcbdddddc.
        cbbbbbcdddddbbc
        cbbbbbcbbbbbbbc
        cbbbbbcbbbbbbbc
        cbbbbbcbbbbbbbc
        .cccccccccccccc
        .cbbc.....cbbc.
        `)
    boule_de_bowling.setImage(img`
        ................................
        ................................
        ................................
        ................................
        .................fffff..........
        ..............fffcccccfff.......
        ............ffcccbbbcbcccff.....
        ...........fccbbbbbcbccccccf....
        ..........fcbbbbbbcbcccacaccf...
        .........fcbbbbbbcbccaaaaaaacf..
        .........fcbbbbbcbccaadadadaaf..
        ........fcbbbbbbbcccadadddadacf.
        ........fcbbbbbbcbcaaadddddaaaf.
        ........fcbbffbbbcccadddddddacf.
        .......fcbbbcffbcbcaaadddddaaacf
        .......fcbbaaffbbcccadadddadaccf
        .......fcfbdaffbcbccaadadadaaccf
        .......fccfbafbbbcbccaaaaaaacccf
        .......fcafbbbbbbbcbcccacacccccf
        ........fdfbbfbbbbbcbcccccccbcf.
        ........fcdbfcfbbbbbcbcbcbcbccf.
        ........fcbbaacfbbbbbcbcbcbcbcf.
        .........fcbdacfbbbbbbbbbbbbcf..
        .........fcbbdbfbbbbbbbbbbbbcf..
        ..........fcbbbbbbbbbbbbbbbcf...
        ...........fccbbbbbbbbbbbccf....
        ............ffcccbbbbbcccff.....
        ..............fffcccccfff.......
        .................fffff..........
        ................................
        ................................
        ................................
        `)
    picture = 5
})
// Pour sortir de la maison
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite3, location3) {
    tiles.setCurrentTilemap(tilemap`niveau4`)
    Player1.setPosition(335, 375)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
// Pour sortir du sous-sol de la maison
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite2, location2) {
    if (picture == 4) {
        canaper.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        boule_de_bowling.setImage(assets.image`myImage`)
        Astronaute.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        tiles.setCurrentTilemap(tilemap`niveau coffre non fermer`)
        Player1.x = 226
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
let nom_joueur = ""
let boule_de_bowling: Sprite = null
let canaper: Sprite = null
let picture = 0
let Player1: Sprite = null
let Astronaute: Sprite = null
let Bob_léponge = sprites.create(img`
    ................ffff............
    ............ffffeeeef...........
    ...........feeeeeeeeef..........
    ..........feeeeeeeeeeef.........
    .........feeeeeeeeeeeeef........
    ........feeeeeedddeeeeeef.......
    ........feeedddddddddeeef.......
    ........feeedddddddddeeef.......
    ........feeedddddddddeeef.......
    ........feedddddddddddeef.......
    ........feedeeedddeeedeef.......
    ........feedddddddddddeef.......
    ........feeddfdddddfddeef.......
    ........feeddfdddfdfddeef.......
    ........f5eddddddfdddde5f.......
    ........fdddddddffddddddf.......
    .........fdddfdddddfdddf........
    .........fddddfffffddddf........
    ..........fdddddddddddf.........
    ...........fdddddddddf..........
    ..........f2fffffffff2f.........
    .........f2f225222522f2f........
    ........ff2f228222822f2ff.......
    ........f22f228222822f22f.......
    ........f22f228222822f22f.......
    ........f22f228222822f22f.......
    .......fdddf228222822fdddf......
    .......fdddf228222822fdddf......
    .......fdddfffffffffffdddf......
    ........ffff888f.f888ffff.......
    ...........f888f.f888f..........
    ...........feeef.feeef..........
    `, SpriteKind.Player)
let Vendeur = sprites.create(img`
    ....................
    ....................
    ......fffffff.......
    ......2222222f......
    .....f22222222f.....
    .....f22222222f.....
    .....ffddfddff......
    .....fdddfddff......
    ......fddddddf......
    ......fdddddf.......
    .....f6866666f......
    ....f668666686f.....
    ....fdd86666ddf.....
    ....fdd88666ddf.....
    .....ff44444ff......
    ......f44f44f.......
    ......f44f44f.......
    ......fffffff.......
    ....................
    ....................
    `, SpriteKind.Player)
let sortie_maison_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    `, SpriteKind.Player)
sortie_maison_1.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
Astronaute = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Bob_léponge.setImage(assets.image`myImage`)
Bob_léponge = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let maison3 = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.maison)
let Mur_Boite_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let cle1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cle)
Player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Shop2 = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ......fffffffffffffffffffffffffffffffffffffffffffffffffffff.....
    .....f22f22222222222222222222222222222222222222222222222222f....
    ....f222f22222222222222222222222222222222222222222222222222f....
    ....f2222f22222222222222222222222222222222222222222222222222f...
    ...f222222f2222222222222222222222222222222222222222222222222f...
    ..f2222222f22222222222222222222222222222222222222222222222222f..
    ..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
    ....f444444444f44444444444444444444444444444444444444444444f....
    ....f444444444f44444112221112222111222111222211122211444444f....
    ....f444444444f44444111222111222211122211122221112221144444f....
    ....f444444444f44444111122111122211112211112221111222114444f....
    ....f444444444f44444cc1122cc11222cc1122cc11222cc11222c14444f....
    ....f444444444f44444cccccccccccccccccccccccccccccccccc44444f....
    ....f4eeeeeee4f44444cccccccccccccccccccccccccccccccccc44444f....
    ....f4eeeeeee4f44444cccfffccccfcccfccccfffccccffffcccc44444f....
    ....f4eeeeeee4f44444cccfccccccfcccfcccfcccfcccfcccfccc44444f....
    ....f4eeeeeee4f44444cccfccccccfcccfcccfcccfcccfcccfccc44444f....
    ....f4eeeeeee4f44444cccfffccccfffffcccfcccfcccfffffccc44444f....
    ....f4eeeeeee4f44444cccccfccccfcccfcccfcccfcccfccccccc44444f....
    ....f4eeeeeee4f44444cccccfccccfcccfcccfcccfcccfccccccc44444f....
    ....f4eeeeeee4f44444cccfffccccfcccfccccfffccccfccccccc44444f....
    ....f4eeeeeee4f44444cccccccccccccccccccccccccccccccccc44444f....
    ....f4eeee55e4f44444cccccccccccccccccccccccccccccccccc44444f....
    ....f4eeee55e4f4444ffffffffffffffffffffffffffffffffffff4444f....
    ....f4eeeeeee4f4444fddddddddddddddddddddddddddddddddddf4444f....
    ....f4eeeeeee4f4444ffffffffffffffffffffffffffffffffffff4444f....
    ....f4eeeeeee4f44444444444444444444444444444444444444444444f....
    ....f4eeeeeee4f44444444444444444444444444444444444444444444f....
    ....f4eeeeeee4f44444444444444444444444444444444444444444444f....
    ....f4eeeeeee4f44444444444444444444444444444444444444444444f....
    ....f4eeeeeee4f44444444444444444444444444444444444444444444f....
    ....f4eeeeeee4f44444444444444444444444444444444444444444444f....
    ..fff4eeeeeee4f44444444444444444444444444444444444444444444fff..
    ..fbffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf..
    ..fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf..
    ..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff..
    ................................................................
    `, SpriteKind.Shop)
Vendeur.setImage(assets.image`myImage`)
Player1.setPosition(265, 285)
game.showLongText("Tous commence sur la terre. Nous nous préparons car une apocalypse va avoir lieu dans moins de 15 min", DialogLayout.Center)
tiles.setCurrentTilemap(tilemap`niveau4`)
info.setScore(0)
let maison2 = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ...............e................................................
    ..............eee...............................................
    .............ecece..............................................
    ............eccecce.............................................
    ...........eccceccce............................................
    ..........eccccecccce...........................................
    ..eeeeeeeeccccceccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............
    ..eccccceccccccecccccceccccccccccccccccccccccccccce.............
    ..eccccecccccccecccccccecccccccccccccccccccccccccce.............
    ..eccceccccccccecccccccceccccccccccccccccccccccccce.............
    ..eccecccccccceeeccccccccecccccccccccccccccccccccce.............
    ..ececccccccceeeeecccccccceccccccccccccccccccccccce.............
    ..eecccccccce4eee4eccccccccecccccccccccccccccccccce.............
    ..ecccccccce44eee44ecccccccecccccccccccccccccccccce.............
    ..eccccccce444eee444eccccccecccccccccccccccccccccce.............
    ..ecccccce4444eee4444ecccccecccccccccccccccccccccce.............
    ..eccccceee444eee444eeeccccecccccccccccccccccccccce.............
    ..ecccce4eee44eee44eee4ecccecccccccccccccccccccccce.............
    ..eccce444eee4eee4eee444eccecccccccccccccccccccccce.............
    ..ecce44444eeeeeeeee44444ececccccccccccccccccccccce.............
    ..ece4444444eeeeeee4444444eecccccccccccccccccccccce.............
    ..eeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccce.............
    ..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.............
    ....e444444444444444444444e44444444444444444444e................
    ....e44444444eeeee44444444e4444eeeee444eeeee444e................
    ....e4444444e66e66e4444444e444e66e66e4e66e66e44e................
    ....e4444444e66e66e4444444e444e66e66e4e66e66e44e................
    ....e4444444eeeeeee4444444e444eeeeeee4eeeeeee44e................
    ....e4444444e66e66e4444444e444e66e66e4e66e66e44e................
    ....e4444444e66e66e4444444e444e66e66e4e66e66e44e................
    ....e44444444eeeee44444444e4444eeeee444eeeee444e................
    ....e444444444444444444444e44444444444444444444e................
    ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................
    ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee................
    ....e44444eeeeeeeeeee44444e44444444444444444444e................
    ....e44444eccccccccce44444e44444444444444444444e................
    ....e44444eccccccccce44444e4444eeeee44444444444e................
    ....e44444eccccccccce44444e444e66e66e4444444444e................
    ....e44444eccccccccce44444e444e66e66e4444444444e................
    ....e44444eccccccccce44444e444eeeeeee4444444444e................
    ....e44444eccccccccce44444e444e66e66e4444444444e................
    ....e44444eccccccc5ce44444e444e66e66e4444444444e................
    ....e44444eccccccccce44444e4444eeeee44444444444e................
    ....e44444eccccccccce44444e44444444444444444444e................
    ....e44444eccccccccce44444e44444444444444444444e................
    ....e44444eccccccccce44444e44444444444444444444e................
    ....e44444eccccccccce44444eeeeeeeeeeeeeeeeeeeeee................
    ....e44444eccccccccce44444e.....................................
    ....e44444eccccccccce44444e.....................................
    ....e44444eeeeeeeeeee44444e.....................................
    `, SpriteKind.maison)
let Boite = sprites.create(img`
    ......fffff.........
    .....f44444fff......
    ...ff4444444f4fffff.
    ..f4444444ff4444444f
    .f4444444f44444444ff
    ff44444ff44444444f4f
    f4fff4f444444444f44f
    f4444fffff44444f444f
    f444444444fff4f4444f
    f444444444444f44444f
    f444444444444f44444f
    f444444444444f44444f
    f444444444444f44444f
    f444444444444f4444f.
    f444444444444f444f..
    fff4444444444f44f...
    ...fff4444444f4f....
    ......fffff44ff.....
    ...........fff......
    `, SpriteKind.Contenant)
let arbre = sprites.create(img`
    ........................
    ...........66...........
    ..........6776..........
    ..........6776..........
    .........877778.........
    ........86777768........
    .......6777777776.......
    ......677677776776......
    ......866777777668......
    .....86677677677668.....
    ....8668866766888668....
    ....8888668886686888....
    .....86868868868668.....
    ....866888668888868.....
    ....8688886888888888....
    ....8886688888866888....
    ....8676888868886768....
    ...87778868678688776....
    ..8777767767787767778...
    .877767777777677776778..
    .8866777777777777776778.
    .8667776776767776777688.
    ..887766768668776667668.
    ..8688668886688686688668
    .86688688686866888688888
    8668868866888866888868..
    88886686688888868688668.
    .8688888888888888668868.
    .8878888868868878868788.
    .87768776788778777667788
    877677767787776767776778
    88877787766777777877788.
    ..88886786777667768888..
    .....86887786668868.....
    ......8886888668888.....
    .........88ee88.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.objet)
let arbre2 = sprites.create(img`
    ........................
    ...........66...........
    ..........6776..........
    ..........6776..........
    .........877778.........
    ........86777768........
    .......6777777776.......
    ......677677776776......
    ......866777777668......
    .....86677677677668.....
    ....8668866766888668....
    ....8888668886686888....
    .....86868868868668.....
    ....866888668888868.....
    ....8688886888888888....
    ....8886688888866888....
    ....8676888868886768....
    ...87778868678688776....
    ..8777767767787767778...
    .877767777777677776778..
    .8866777777777777776778.
    .8667776776767776777688.
    ..887766768668776667668.
    ..8688668886688686688668
    .86688688686866888688888
    8668868866888866888868..
    88886686688888868688668.
    .8688888888888888668868.
    .8878888868868878868788.
    .87768776788778777667788
    877677767787776767776778
    88877787766777777877788.
    ..88886786777667768888..
    .....86887786668868.....
    ......8886888668888.....
    .........88ee88.........
    .........feeeef.........
    .........feeeef.........
    ........feeefeef........
    ........fefeffef........
    `, SpriteKind.objet)
maison2.setPosition(351, 324)
maison3.setPosition(385, 430)
Boite.setPosition(220, 330)
Shop2.setPosition(370, 207)
arbre.setPosition(200, 250)
arbre2.setPosition(330, 250)
scene.cameraFollowSprite(Player1)
controller.moveSprite(Player1, 100, 100)
picture = 1
let Rocket_voltic = sprites.create(assets.image`Fusee entiere`, SpriteKind.Fusée)
Rocket_voltic.setImage(assets.image`Fusse avec un reacteur`)
Rocket_voltic.setPosition(400, 324)
game.splash("Trouver une clé")
// Pour faire réapparaitre le joueur quand on touche un mur dans la boite
forever(function () {
    if (Player1.overlapsWith(Mur_Boite_1)) {
        Player1.setPosition(121, 100)
    }
})
// Premier dialogue avec l'astronaute
forever(function () {
    if (Player1.overlapsWith(Astronaute) && picture == 3) {
        Player1.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player1)
        Player1.setPosition(88, 82)
    }
    if (Player1.overlapsWith(Astronaute) && picture == 5) {
        Player1.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, Player1)
        Player1.setPosition(88, 80)
    }
})
// Pour sortir de la boite
forever(function () {
    if (Player1.overlapsWith(cle1)) {
        if (picture == 2) {
            game.showLongText("Bravo, tu as trouvé la première clé", DialogLayout.Bottom)
            game.showLongText("Rends-toi à la maison", DialogLayout.Bottom)
            scene.cameraFollowSprite(Player1)
            info.setScore(1)
            Mur_Boite_1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Bob_léponge.setImage(assets.image`myImage`)
            cle1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Player1.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
            tiles.setCurrentTilemap(tilemap`niveau4`)
            Player1.setPosition(220, 350)
            Player1.sx = 1
            Player1.sy = 1
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
            controller.moveSprite(Player1, 100, 100)
            picture = 3
        }
    }
})
// Pour apparaitre dans la boite
forever(function () {
    if (picture == 1) {
        if (Player1.overlapsWith(Boite)) {
            controller.moveSprite(Player1)
            Player1.setStayInScreen(true)
            tiles.setCurrentTilemap(tilemap`niveau5`)
            Player1.sx = 0.5
            Player1.sy = 0.5
            Player1.setPosition(121, 100)
            Player1.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
            Vendeur.setImage(assets.image`myImage`)
            Astronaute.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Bob_léponge.setImage(assets.image`myImage`)
            Boite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            Mur_Boite_1.setImage(img`
                ................................fff................fff.........fff..........................fff...................................fff........................fff
                .ffffffffffffffffffffffffffffffffff................fff.........fffffffffffff................fff...................................fff........................fff
                .ffffffffffffffffffffffffffffffffff................fff.........fffffffffffff................fff...................................fff........................fff
                .fffffffffffffffffffffffffffffffffffffffffffffffffffff.........fffffffffffff................fff...................................fff........................fff
                .fff............................ffffffffffffffffffffff.........fff....................fffffffff......................ffffffffffffffff........................fff
                .fff............................ffffffffffffffffffffff......ffffff....................fffffffff......................ffffffffffffffff........................fff
                .fff............................fff................fff......ffffff....................fffffffff......................ffffffffffffffff........................fff
                .fff............................fff................fff......ffffff.......fff................fff...................................fff........................fff
                .fff............................fff................fff.........fff.......fff................fff...................................fff........................fff
                .fff............................fff................fff.........fff.......fff................fff...................................fffffff....................fff
                .fff...............................................fff.........fff.......fff................fff...................................fffffff....................fff
                .fff.....................................................................fffffffffffffffffffffffffffffffffffff....................fffffff....................fff
                .fff.....................................................................fffffffffffffffffffffffffffffffffffff....................fff........................fff
                .fff.....................................................................fffffffffffffffffffffffffffffffffffff....................fff........................fff
                .fff.....................................................................fff......................................................fff........................fff
                .fff.....................................................................fff......................................................fff........................fff
                .fff.....................................................................fff......................................................fff........................fff
                .fff.....................................................................fff......................................................fff....................fffffff
                .fff.....................................................................fff............................................fff.......fff....................fffffff
                .fff.....................................................................fff............................................fff.......fff....................fffffff
                .fff.....................................................................fff............................................fff.......fff........................fff
                .fff.....................................................................fff............................................fff.......fff........................fff
                .fff.....................................................................fff............................................fff.......fff........................fff
                .fff.....................................................................fff............................................fff.......fff........................fff
                .fff.....................................................................fffffffffffffffffffff...........ffffffffffffffffffffffffffff........................fff
                .fff.....................................................................fffffffffffffffffffff...........ffffffffffffffffffffffffffff........................fff
                .fff.....................................................................fffffffffffffffffffff...........ffffffffffffffffffffffffffff........................fff
                .fff............................fff..................................................fff.................fff......................fff........................fff
                .fff............................fff..................................................fff.................fff......................fff........................fff
                .fff...fff................fff...fff..................................................fff.................fff......................fff........................fff
                .fffffffff................fff...fff...............fff................................fff.................fff......................fff........................fff
                .fffffffff.........fff....fff...fff...............fff................................fffffffff...........fff......................ffffffff...................fff
                .fffffffff.........fff....fff...fff...............fff................................fffffffff...........fff......................ffffffff...................fff
                .......fffffffff...fff....fff...fff...............fff................................fffffffff...........fff......................ffffffff...................fff
                .......fffffffff...fff....fff...fff...............ffffff.............................fff.................ffffffffffffffff.........fff........................fff
                .......fffffffff...fff....fff...fff...............ffffff.............................fff.................ffffffffffffffff.........fff........................fff
                .......fff.........fff....fff...fff...............ffffff.............................fff.................ffffffffffffffff.........fff........................fff
                .......fff.........ffffffffffffffff...............fff................................fff..........................................fff........................fff
                .......fff.........ffffffffffffffff...............fff................................fff..........................................fff........................fff
                .......fff.........ffffffffffffffff...............fff.............................................................................fff...................ffffffff
                .......fff......................fff...............fff.............................................................................fff...................ffffffff
                .......fff......................fff...............fff.............................................................................fff...................ffffffff
                .......fff......................fff...............fff.............................................................................fff........................fff
                .......fffffffffffffffff........fff...............fff.............................................................................fff........................fff
                .......fffffffffffffffff........fff...............fff.............................................................................fff........................fff
                .......fffffffffffffffff........fff...............fff.............................................................................fff........................fff
                .......fff......................fff...............fff.............................................................................fff........................fff
                .......fff......................fff...............fff.............................................................................fff........................fff
                .......fff......................fff...............fff.............................................................................fff........................fff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................fff..................fffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................................................fff..................fffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffff..............................................................................................fffffffff
                ......................................................fff..............fffffffffffffffffffffff.........ffffffff.................................................
                ......................................................fff..............fffffffffffffffffffffff.........ffffffff.................................................
                ......................................................fff..............fffffffffffffffffffffff.........ffffffff.................................................
                ......................................................fff..............fff.................fff.........fff......................................................
                ......................................................fff..............fff.................fff.........fff......................................................
                ......................................................fff..............fff.................fff.........fff......................................................
                ......................................................fff..............fff.................fff.........fff......................................................
                ......................................................fff..............fffffffff...........fff.........fff......................................................
                ffffffffffffffffffffffffffffffffffffffff..............fff..............fffffffff...........fff.........fff......................................................
                ffffffffffffffffffffffffffffffffffffffff..............fff..............fffffffff...........fff.........fff......................................................
                ffffffffffffffffffffffffffffffffffffffff..............fff..............fff.................fff.........fffffffffff...............................fffffffffffffff
                .............fff.....................fff..............fff..............fff.................fff.........fffffffffff...............................fffffffffffffff
                .............fff.....................fff..............fff..............fff.................fff.........fffffffffff...............................fffffffffffffff
                .............fff.....................fff..............fff..............fff.................fff.........fff.......................................fff............
                .............fff.....................fff..............fff..................................fff.........fff.......................................fff............
                .............fff.....................fff..............fff..................................fff.........fff.......................................fff............
                .............fff.....................fff..............fff..................................fff.........fffffffffffffffffffffff...................fff............
                .............fff.....................fff..............fff..................................fff.........fffffffffffffffffffffff...................fff............
                .............fff.....................fff..............fff..................................fff.........fffffffffffffffffffffff...................fff............
                .............fff.....................fff..............fff..................................fff.........fff.................fff...................fff............
                .............fff...........................................................................fff.........fff.................fff...................fff............
                .............fff...........................................................................fff.........fff.................fff...................fff............
                .............fff................................................................fff........fff.........fff.................fff...................fff............
                .............fff................................................................fff........fff.........fff.................fff..................................
                .............fff................................................................fff........fff.........fff.................fff..................................
                fffffff......fff................................................................fff........fff.........fff.................fff..................................
                fffffff......fff................................................................fff........fff.............................fff..................................
                fffffff......fff....................................................ffffffffffffffffffffffffff.............................fff..................................
                ....fff......fff....................................................ffffffffffffffffffffffffff.............................fff........................ffffffffff
                ....fff......fff.................fff................................ffffffffffffffffffffffffff........................................................ffffffffff
                ....fff......fff.................fff..................................................................................................................ffffffffff
                ....fff......fff.................fff............................................................................................................................
                ....fff......fffffffffffffffffffffff............................................................................................................................
                ....fff......fffffffffffffffffffffff............................................................................................................................
                ....fff......fffffffffffffffffffffff............................................................................................................................
                ....fff......fff................................................................................................................................................
                ....fff......fff................................................................................................................................................
                ....fff......fff................................................................................................ffffffffffffffffffffffffffffffffffffff..........
                ....fff......fff................................................................................................ffffffffffffffffffffffffffffffffffffff..........
                ....fff......fff................................................................................................ffffffffffffffffffffffffffffffffffffff..........
                ....fff......fff................................................................................................fff.............fff................fff..........
                ....fff......fff................................................................................................fff.............fff................fff..........
                ....fff......fff................................................................................................fff.............fff................fff..........
                ....fff......fff........................................fff.....................................................fff.............fff................fff..........
                ....fff......fff........................................fff.....................................................fff.............fff................fff..........
                ....fff......fff........................................fff.....................................................fff.............fff................fff..........
                ....fff.................................................fff.....................................................fff.............fff................fff..........
                ....fff..........................fff....................fff.....................................................fff.............fff................fff..........
                ....fff..........................fff....................fff................................ffffffffffffffffffffffff.............fff................fffffffffffff
                ....fff..........................fff....................fff................................ffffffffffffffffffffffff.............fff................fffffffffffff
                ....fff..........................fff....................fff................................ffffffffffffffffffffffff.............fff................fffffffffffff
                ....fff..........................fff....................fff........................................fff..........................fff................fff..........
                ....fff..........................fff....................fff........................................fff..........................fff................fff..........
                ....fff..........................fff....................fff........................................fff..........................fffffff............fff..........
                ....fff..........................fff....................fff........................................fff..........................fffffff............fff..........
                ....fff..........................fff....................fff........................................fff..........................fffffff............fff..........
                ....fff..........................fff....................fff........................................fff.............................................fff..........
                ....fff..........................fff....................fff........................................fff.............................................fff..........
                ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................fff.............................................fff..........
                ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................fff.............................................fff..........
                ....fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................................................fff..........
                ...................................................................................................................................................fff..........
                ...................................................................................................................................................fff..........
                ...................................................................................................................................................fff..........
                ...................................................................................................................................................fff..........
                ...................................................................................................................................................fff..........
                ...................................................................................................................................................fff..........
                ...................................................................................................................................................fff..........
                `)
            Mur_Boite_1.setPosition(80, 60)
            scene.setBackgroundImage(img`
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                `)
            cle1.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 . 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . . . . . . 5 5 5 . . . . 
                . . . . . . . . . . 5 5 5 . . . 
                . . . . . . . . . . . 5 5 5 . . 
                . . . . . . . . . . . . 5 5 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            cle1.x = 12
            cle1.y = 13
            scene.centerCameraAt(80, 60)
            picture = 2
        }
    }
})
forever(function () {
    if (picture == 1) {
        // Première étape
        if (Player1.overlapsWith(maison2)) {
            game.showLongText("Tu dois trouver la clé pour ouvrir la maison", DialogLayout.Top)
            Player1.setPosition(335, 368)
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        }
    } else if (Player1.overlapsWith(maison2)) {
        Player1.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        sortie_maison_1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 1 . . . . . . 
            `)
        Vendeur.setImage(assets.image`myImage`)
        Bob_léponge.setImage(assets.image`myImage`)
        scene.cameraFollowSprite(Player1)
        tiles.setCurrentTilemap(tilemap`niveau1`)
        canaper = sprites.create(img`
            ..cccc.........
            .cdddbc........
            cbdddbccccccc..
            cbdddbcbdddddc.
            cbdddbcdddddbbc
            cbdddbcbbbbbbbc
            cbdddbccccccbbc
            cbdddbcddddbccc
            cbdddbcdddddbc.
            cbdddbcdddddbc.
            cbdddbcdddddbc.
            cbdddbcdddddbc.
            cbdddbcdddddbc.
            cbdddbcdddddbc.
            cbdddbcdddddbc.
            cbddbbcdddddbc.
            cbbbbbcccccccc.
            cbbbbbcbdddddc.
            cbbbbbcdddddbbc
            cbbbbbcbbbbbbbc
            cbbbbbcbbbbbbbc
            cbbbbbcbbbbbbbc
            .cccccccccccccc
            .cbbc.....cbbc.
            `, SpriteKind.objet)
        canaper.setPosition(15, 93)
        canaper.sx = 1.5
        canaper.sy = 1.5
        Player1.setPosition(128, 225)
        Astronaute.setImage(img`
            ...........fffffffffff..........
            ..........f1111bbb1111f.........
            .........f11fffffffff11f........
            ........f11f616616616f11f.......
            ........f1f66166166166f1f.......
            ........f1f66616616616f1f.......
            ........f1f66661661616f1f.......
            ........f1f66661661661f1f.......
            ........f11f666616616f11f.......
            .........f11fffffffff11f........
            ..........f1111bbb1111f.........
            ...........fffffffffff..........
            .........ff11f11111f11ff........
            ........f11111f111f11111f.......
            .......f11111111111111111f......
            .......f1111f1111111f1111f......
            .......f222ff1111111ff222f......
            .......f111f111111111f111f......
            .......f111f111111111f111f......
            .......f111fffffffffff111f......
            ........ffff1111f1111ffff.......
            ...........f1111f1111f..........
            ...........f1111f1111f..........
            ...........f1111f1111f..........
            ...........f2222f2222f..........
            ...........f1111f1111f..........
            ...........f1111f1111f..........
            ...........fffffffffff..........
            ...........fbbbbfbbbbf..........
            ............ffff.ffff...........
            `)
        Astronaute.setPosition(88, 60)
        boule_de_bowling = sprites.create(img`
            ................................
            ................................
            ................................
            ................................
            .................fffff..........
            ..............fffcccccfff.......
            ............ffcccbbbcbcccff.....
            ...........fccbbbbbcbccccccf....
            ..........fcbbbbbbcbcccacaccf...
            .........fcbbbbbbcbccaaaaaaacf..
            .........fcbbbbbcbccaadadadaaf..
            ........fcbbbbbbbcccadadddadacf.
            ........fcbbbbbbcbcaaadddddaaaf.
            ........fcbbffbbbcccadddddddacf.
            .......fcbbbcffbcbcaaadddddaaacf
            .......fcbbaaffbbcccadadddadaccf
            .......fcfbdaffbcbccaadadadaaccf
            .......fccfbafbbbcbccaaaaaaacccf
            .......fcafbbbbbbbcbcccacacccccf
            ........fdfbbfbbbbbcbcccccccbcf.
            ........fcdbfcfbbbbbcbcbcbcbccf.
            ........fcbbaacfbbbbbcbcbcbcbcf.
            .........fcbdacfbbbbbbbbbbbbcf..
            .........fcbbdbfbbbbbbbbbbbbcf..
            ..........fcbbbbbbbbbbbbbbbcf...
            ...........fccbbbbbbbbbbbccf....
            ............ffcccbbbbbcccff.....
            ..............fffcccccfff.......
            .................fffff..........
            ................................
            ................................
            ................................
            `, SpriteKind.objet)
        boule_de_bowling.setPosition(130, 30)
        boule_de_bowling.sx = 0.5
        boule_de_bowling.sy = 0.5
    }
})
forever(function () {
    music.setVolume(20)
    music.play(music.createSong(hex`0078000408040206001c00010a006400f401640000040000000000000000000000000000000002ae0000000400011d04000800012208000c0001220c001000012410001400021e2518001c0001221c002000021e2720002400021b2224002800012228002c00021b2a2c003000012230003400011d34003800012438003c0001293c004000012040004400011b44004800012748004c00021d205000540002202754005800012c58005c000319222760006400031d222968006c0001246c007000022027700074000129740078000220247c008000012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80061000800090001071400150001071c001d0001072400250001072c002d0001073400350001083800390001084000410001074400450001064800490001074c004d0001075000510001075400550001075800590001075c005d00010764006500020408`), music.PlaybackMode.UntilDone)
})
forever(function () {
    if (picture == 6) {
        if (Player1.overlapsWith(Shop2)) {
            tiles.setCurrentTilemap(tilemap`niveau21`)
            Player1.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
            Vendeur.setImage(img`
                . . . . f f f f f f f . . . . . 
                . . . . 2 2 2 2 2 2 2 f . . . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . . f 2 2 2 2 2 2 2 2 f . . . 
                . . . f f d d f d d f f . . . . 
                . . . f d d d f d d f f . . . . 
                . . . . f d d d d d d f . . . . 
                . . . . f d d d d d f . . . . . 
                . . . f 6 8 6 6 6 6 6 f . . . . 
                . . f 6 6 8 6 6 6 6 8 6 f . . . 
                . . f d d 8 6 6 6 6 d d f . . . 
                . . f d d 8 8 6 6 6 d d f . . . 
                . . . f f 4 4 4 4 4 f f . . . . 
                . . . . f 4 4 f 4 4 f . . . . . 
                . . . . f 4 4 f 4 4 f . . . . . 
                . . . . f f f f f f f . . . . . 
                `)
            boule_de_bowling.setImage(assets.image`myImage`)
            arbre2.setImage(assets.image`myImage`)
            arbre.setImage(assets.image`myImage`)
            Astronaute.setImage(assets.image`myImage`)
            canaper.setImage(assets.image`myImage`)
            Vendeur.setPosition(230, 145)
        }
    } else {
        // Première étape
        if (Player1.overlapsWith(Shop2)) {
            game.showLongText("Le shop est temporairement fermé", DialogLayout.Top)
            Player1.setPosition(325, 227)
            animation.stopAnimation(animation.AnimationTypes.All, Player1)
            Player1.setImage(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `)
        }
    }
})
// Deuxième dialogue avec l'astronaute
forever(function () {
    if (picture == 5) {
        if (Player1.overlapsWith(Astronaute)) {
            controller.moveSprite(Player1, 0, 0)
            story.spriteSayText(Astronaute, "Bravo, tu as trouvé la deuxième clé")
            story.spriteSayText(Astronaute, "Mais il en reste encore une")
            story.spriteSayText(Astronaute, "Pour cela, tu vas devoir me rendre un service")
            story.spriteSayText(Astronaute, "Tu dois me ramener un réacteur de fusée")
            story.spriteSayText(Astronaute, "Bonne chance")
            game.splash("Ramener le réacteur de fusée à Apollo")
            controller.moveSprite(Player1, 100, 100)
            picture = 6
        }
    }
})
// Premier dialogue avec l'astronaute
forever(function () {
    if (Player1.overlapsWith(Astronaute) && picture == 3) {
        controller.moveSprite(Player1, 0, 0)
        story.spriteSayText(Astronaute, "Bienvenue jeune voyageur")
        story.spriteSayText(Astronaute, "Comment appelles-tu ?")
        nom_joueur = game.askForString("")
        story.spriteSayText(Astronaute, nom_joueur)
        story.spriteSayText(Astronaute, "Il te manque encore deux clés")
        game.splash("Trouver les deux clés manquantes")
        controller.moveSprite(Player1, 100, 100)
        picture = 4
    }
})
