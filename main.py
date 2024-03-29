@namespace
class SpriteKind:
    Contenant = SpriteKind.create()
    cle = SpriteKind.create()
    maison = SpriteKind.create()
    Shop = SpriteKind.create()
    Fusée = SpriteKind.create()
    objet = SpriteKind.create()

def on_right_released():
    animation.run_image_animation(Player1,
        [img("""
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
        """)],
        100,
        False)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_down_pressed():
    animation.run_image_animation(Player1,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_up_released():
    animation.run_image_animation(Player1,
        [img("""
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
        """)],
        100,
        False)
controller.up.on_event(ControllerButtonEvent.RELEASED, on_up_released)

def on_up_pressed():
    animation.run_image_animation(Player1,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

# En trouvant le coffre

def on_overlap_tile(sprite, location):
    global picture
    tiles.set_current_tilemap(tilemap("""
        niveau2
    """))
    game.show_long_text("Bravo, tu as trouvé la deuxième clé", DialogLayout.TOP)
    game.show_long_text("Maintenant, retourne voir l'astronaute", DialogLayout.TOP)
    tiles.set_current_tilemap(tilemap("""
        niveau1
    """))
    Player1.x = 215
    Astronaute.set_image(img("""
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
    """))
    Astronaute.set_position(88, 60)
    info.set_score(2)
    canaper.set_image(img("""
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
    """))
    boule_de_bowling.set_image(img("""
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
    """))
    picture = 5
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile)

# Pour sortir de la maison

def on_overlap_tile2(sprite3, location3):
    tiles.set_current_tilemap(tilemap("""
        niveau4
    """))
    Player1.set_position(335, 375)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile11
    """),
    on_overlap_tile2)

def on_down_released():
    animation.run_image_animation(Player1,
        [img("""
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
        """)],
        100,
        False)
controller.down.on_event(ControllerButtonEvent.RELEASED, on_down_released)

def on_right_pressed():
    animation.run_image_animation(Player1,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

# Pour sortir du sous-sol de la maison

def on_overlap_tile3(sprite2, location2):
    if picture == 4:
        canaper.set_image(img("""
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
        """))
        boule_de_bowling.set_image(assets.image("""
            myImage
        """))
        Astronaute.set_image(img("""
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
        """))
        tiles.set_current_tilemap(tilemap("""
            niveau coffre non fermer
        """))
        Player1.x = 226
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile3)

def on_left_released():
    animation.run_image_animation(Player1,
        [img("""
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
        """)],
        100,
        False)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_left_pressed():
    animation.run_image_animation(Player1,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

nom_joueur = ""
boule_de_bowling: Sprite = None
canaper: Sprite = None
picture = 0
Player1: Sprite = None
Astronaute: Sprite = None
Bob_léponge = sprites.create(img("""
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
    """),
    SpriteKind.player)
sortie_maison_1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
sortie_maison_1.set_image(img("""
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
"""))
Astronaute = sprites.create(img("""
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
    """),
    SpriteKind.player)
Bob_léponge.set_image(assets.image("""
    myImage
"""))
Bob_léponge = sprites.create(img("""
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
    """),
    SpriteKind.player)
Mur_Boite_1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
cle1 = sprites.create(img("""
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
    """),
    SpriteKind.cle)
Player1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
Shop2 = sprites.create(img("""
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
    """),
    SpriteKind.Shop)
Player1.set_position(265, 285)
game.show_long_text("Tous commence sur la terre. Nous nous préparons car une apocalypse va avoir lieu dans moins de 15 min",
    DialogLayout.CENTER)
tiles.set_current_tilemap(tilemap("""
    niveau4
"""))
info.set_score(0)
maison2 = sprites.create(img("""
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
    """),
    SpriteKind.maison)
Boite = sprites.create(img("""
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
    """),
    SpriteKind.Contenant)
maison2.set_position(351, 324)
Boite.set_position(220, 330)
Shop2.set_position(370, 207)
scene.camera_follow_sprite(Player1)
controller.move_sprite(Player1, 100, 100)
picture = 1
Rocket_voltic = sprites.create(assets.image("""
    Fusee entiere
"""), SpriteKind.Fusée)
Rocket_voltic.set_image(assets.image("""
    Fusse avec un reacteur
"""))
Rocket_voltic.set_position(400, 324)
game.splash("Trouver une clé")
# Pour faire réapparaitre le joueur quand on touche un mur dans la boite

def on_forever():
    if Player1.overlaps_with(Mur_Boite_1):
        Player1.set_position(121, 100)
forever(on_forever)

# Premier dialogue avec l'astronaute

def on_forever2():
    if Player1.overlaps_with(Astronaute) and picture == 3:
        Player1.set_image(img("""
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
        """))
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, Player1)
        Player1.set_position(88, 82)
    if Player1.overlaps_with(Astronaute) and picture == 5:
        Player1.set_image(img("""
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
        """))
        animation.stop_animation(animation.AnimationTypes.IMAGE_ANIMATION, Player1)
        Player1.set_position(88, 80)
forever(on_forever2)

def on_forever3():
    global canaper, boule_de_bowling
    if picture == 1:
        # Première étape
        if Player1.overlaps_with(maison2):
            game.show_long_text("Tu dois trouver la clé pour ouvrir la maison",
                DialogLayout.TOP)
            Player1.set_position(335, 368)
            animation.stop_animation(animation.AnimationTypes.ALL, Player1)
            Player1.set_image(img("""
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
            """))
    elif Player1.overlaps_with(maison2):
        Player1.set_image(img("""
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
        """))
        sortie_maison_1.set_image(img("""
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
        """))
        Bob_léponge.set_image(assets.image("""
            myImage
        """))
        scene.camera_follow_sprite(Player1)
        tiles.set_current_tilemap(tilemap("""
            niveau1
        """))
        canaper = sprites.create(img("""
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
            """),
            SpriteKind.objet)
        canaper.set_position(15, 93)
        canaper.sx = 1.5
        canaper.sy = 1.5
        Player1.set_position(128, 225)
        Astronaute.set_image(img("""
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
        """))
        Astronaute.set_position(88, 60)
        boule_de_bowling = sprites.create(img("""
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
            """),
            SpriteKind.objet)
        boule_de_bowling.set_position(130, 30)
        boule_de_bowling.sx = 0.5
        boule_de_bowling.sy = 0.5
forever(on_forever3)

# Pour sortir de la boite

def on_forever4():
    global picture
    if Player1.overlaps_with(cle1):
        if picture == 2:
            game.show_long_text("Bravo, tu as trouvé la première clé", DialogLayout.BOTTOM)
            game.show_long_text("Rends-toi à la maison", DialogLayout.BOTTOM)
            scene.camera_follow_sprite(Player1)
            info.set_score(1)
            Mur_Boite_1.set_image(img("""
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
            """))
            Bob_léponge.set_image(assets.image("""
                myImage
            """))
            cle1.set_image(img("""
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
            """))
            Player1.set_image(img("""
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
            """))
            tiles.set_current_tilemap(tilemap("""
                niveau4
            """))
            Player1.set_position(220, 350)
            Player1.sx = 1
            Player1.sy = 1
            animation.stop_animation(animation.AnimationTypes.ALL, Player1)
            Player1.set_image(img("""
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
            """))
            controller.move_sprite(Player1, 100, 100)
            picture = 3
forever(on_forever4)

# Deuxième dialogue avec l'astronaute

def on_forever5():
    global picture
    if picture == 5:
        if Player1.overlaps_with(Astronaute):
            controller.move_sprite(Player1, 0, 0)
            story.sprite_say_text(Astronaute, "Bravo, tu as trouvé la deuxième clé")
            story.sprite_say_text(Astronaute, "Mais il en reste encore une")
            story.sprite_say_text(Astronaute, "Pour cela, tu vas devoir me rendre un service")
            story.sprite_say_text(Astronaute, "Tu dois me ramener un réacteur de fusée")
            story.sprite_say_text(Astronaute, "Bonne chance")
            game.splash("Ramener le réacteur de fusée à Apollo")
            controller.move_sprite(Player1, 100, 100)
            picture = 6
forever(on_forever5)

# Pour apparaitre dans la boite

def on_forever6():
    global picture
    if picture == 1:
        if Player1.overlaps_with(Boite):
            controller.move_sprite(Player1)
            Player1.set_stay_in_screen(True)
            tiles.set_current_tilemap(tilemap("""
                niveau5
            """))
            Player1.sx = 0.5
            Player1.sy = 0.5
            Player1.set_position(121, 100)
            Player1.set_image(img("""
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
            """))
            Astronaute.set_image(img("""
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
            """))
            Bob_léponge.set_image(assets.image("""
                myImage
            """))
            Boite.set_image(img("""
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
            """))
            Mur_Boite_1.set_image(img("""
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
            """))
            Mur_Boite_1.set_position(80, 60)
            scene.set_background_image(img("""
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
            """))
            cle1.set_image(img("""
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
            """))
            cle1.x = 12
            cle1.y = 13
            scene.center_camera_at(80, 60)
            game.show_long_text("Appuyez sur le bouton B pour sortir", DialogLayout.TOP)
            picture = 2
forever(on_forever6)

def on_forever7():
    if picture == 6:
        if Player1.overlaps_with(Shop2):
            tiles.set_current_tilemap(tilemap("""
                niveau21
            """))
            Player1.set_image(img("""
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
            """))
            boule_de_bowling.set_image(assets.image("""
                myImage
            """))
            Astronaute.set_image(assets.image("""
                myImage
            """))
            canaper.set_image(assets.image("""
                myImage
            """))
            Bob_léponge.set_image(img("""
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
                                ........feedeedddddeedeef.......
                                ........feedddedddedddeef.......
                                ........feeddfdddddfddeef.......
                                ........feeddfdddfdfddeef.......
                                ........f5eddddddfdddde5f.......
                                ........fdddddddffddddddf.......
                                .........fdddddddddddddf........
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
            """))
            Bob_léponge.set_position(210, 100)
    else:
        # Première étape
        if Player1.overlaps_with(Shop2):
            game.show_long_text("Le shop est temporairement fermé", DialogLayout.TOP)
            Player1.set_position(325, 227)
            animation.stop_animation(animation.AnimationTypes.ALL, Player1)
            Player1.set_image(img("""
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
            """))
forever(on_forever7)

# Premier dialogue avec l'astronaute

def on_forever8():
    global nom_joueur, picture
    if Player1.overlaps_with(Astronaute) and picture == 3:
        controller.move_sprite(Player1, 0, 0)
        story.sprite_say_text(Astronaute, "Bienvenue jeune voyageur")
        story.sprite_say_text(Astronaute, "Comment appelles-tu ?")
        nom_joueur = game.ask_for_string("")
        story.sprite_say_text(Astronaute, nom_joueur)
        story.sprite_say_text(Astronaute, "Il te manque encore deux clés")
        game.splash("Trouver les deux clés manquantes")
        controller.move_sprite(Player1, 100, 100)
        picture = 4
forever(on_forever8)
