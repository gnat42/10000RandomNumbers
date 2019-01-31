<?php

class RandomNumbers
{
    public static function shuffle(): array
    {
        $input = range(1,10000);
//        [];
//        for ($x = 1; $x <= 10000; $x++) {
//            $input[$x] = $x;
//        }

        for ($x = 9999; $x >= 1; $x--) {
            $random = \random_int(1, $x);

            $tmp            = $input[$random];
            $input[$random] = $input[$x];
            $input[$x]      = $tmp;
        }

        return $input;
    }
}
